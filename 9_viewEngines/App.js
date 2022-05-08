// People call this file App.js using express module
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

// express app
const app = express();

// MongoDB URI
// A reminder that use own name, password, and database name
const mongoURI = 'mongodb+srv://yongchanghe:abcdABCD12345@node-for-yong.yojr5.mongodb.net/yong-project-001?retryWrites=true&w=majority';

// connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch(err => console.log(err));

// register view engine, important
app.set('views', './views');
app.set('view engine', 'ejs');

// use the middleware from third party
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));    // for form data (POST)
app.use(morgan('dev'));

// routes
// redirect to blogs
app.get('/', (req, res) => {
    res.redirect('/blogs');
}); 

app.get('/about', (req, res) => {
    // res.send('<p> This is the about page </p>');
    res.render('about', { title: 'About' });
})


// blog routes
app.use('/blogs', blogRoutes);

// 404 page
// This block should be at the very bottom, and this is important! 
// Or the matching machanism will fail to do the match
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
})