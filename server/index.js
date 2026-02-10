const express = require('express')
const application = express();
const mongoose = require('mongoose');

application.get('/', (req, res) => {
    res.send(`Server is running on port ${port}`);
})

const port = process.env.PORT || 8080;

application.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})