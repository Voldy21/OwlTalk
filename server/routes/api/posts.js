const express = require('express');
const router = express.Router();
const Post = require("../../models/Post");
const {check, validationResult} = require('express-validator');


// @route    Post api/posts
// @desc     Create a post
// @access   Private
router.get('/', async (req, res) => {
    let text = "completed"
    let posts = await Post.find()
    console.log(posts)
    res.status(400).json(text);
})

router.post('/',
    [
        auth,
        [
            check('body', "Text is required").not().isEmpty(),
            check('title', "Title is required").not().isEmpty()
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        try{
            let postFields = {
                title: req.body.title,
                text: req.body.body
            }
            let newPost = new Post(postFields)
            let post = await newPost.save()
            res.status(400).json(post)
        }catch(err){
            console.error(err.message);
            res.status(500).send("Server Error");
        }
    })

module.exports = router;