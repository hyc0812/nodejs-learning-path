// People call this file App.js using express module
const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(3000);


app.get('/', (req, res) => {
    res.send('<p> Home page Hello world using express and nodemon </p>');
})