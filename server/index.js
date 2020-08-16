const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors')

const app = express();

app.use(cors())
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Headers', '*')
//     if(req.method === 'OPTION'){
//         res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE, GET')
//         return res.status(200).json({});
//     }
// })

//Connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send("APP RUNNING"));
app.use('/api/users', require('./routes/api/users'));
// app.use('/api/auth', require('./routes/api/auth'));
// app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));