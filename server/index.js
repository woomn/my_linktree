const express = require('express');
const cors = require("cors");
const application = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const { registerUser, loginUser } = require('./controllers/auth');
require('dotenv').config();

application.use(cors());
application.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/my_linktree_db").then(() => {
    console.log("MongoDB Connected")}).catch(err => {console.log(err.message)});

application.get('/', (req, res) => {
    res.send(`Server is running on port ${port}`);
})

application.post('/api/register', registerUser);
application.post('/api/login', loginUser);

const port = process.env.PORT || 8080;

application.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})