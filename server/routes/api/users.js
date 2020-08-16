const express = require('express');
const router = express.Router();
const User = require("../../models/User");
const {check, validationResult} = require('express-validator');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("config");

router.get('/', (req,res) => {
    res.status(200).json({text: "hello"})
})

router.post("/", 
[
    check('username', 'Username is required')
            .not()
            .isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Please enter a password with 6 or more characters')
        .isLength({min: 6}),
],
async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    //pull name, email, and password from req.body
    const { username, email, password } = req.body;

    try{
        //see if user exists
        let user = await User.findOne({email: email})

        if(user){
            return res.status(400).json({errors: [{msg: "User already Exists"}]})
        }

        user = new User({
            username,
            email,
            password
        })

        //Encrypt the password
        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password,salt)

        await user.save()

        //Return jsonwebtoken
        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(
            payload, // payload
            config.get('jwtToken'), //secret
            { expiresIn: 36000}, //expiration
            (err, token) => {
                if(err) throw err;
                res.json({ token });
            }
        );
    }catch(err){
        console.log(err.message)
        res.status(500).send("Server error")
    }
})

module.exports = router;