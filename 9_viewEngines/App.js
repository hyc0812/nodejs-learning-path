// People call this file App.js using express module
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

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
app.use(morgan('dev'));

// mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'New Blog',
        snippet: 'about my new blog',
        body: 'New Blog Body'
    });
    blog.save()
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        });
});

// make my own middleware
// app.use((req, res, next) => {
//     console.log('new request made');
//     console.log('host:', req.hostname);


app.get('/', (req, res) => {
    const blogs = [
        { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.' },
        { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.' },
        { title: 'Link finds secret', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.' },
    ];
    res.render('index', { title: 'Home', blogs }); 
})

app.get('/about', (req, res) => {
    // res.send('<p> This is the about page </p>');
    res.render('about', { title: 'About' });
})

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
})

// 404 page
// This block should be at the very bottom, and this is important! 
// Or the matching machanism will fail to do the match
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
})