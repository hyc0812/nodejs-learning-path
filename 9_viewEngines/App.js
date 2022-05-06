// People call this file App.js using express module
const express = require('express');
const morgan = require('morgan');

// express app
const app = express();

// MongoDB URI
const mongoURI = 'mongodb+srv://yongchanghe:abcdABCD12345@node-for-yong.yojr5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// register view engine, important
app.set('views', './views');
app.set('view engine', 'ejs');


// listen for requests
app.listen(3000);

// use the middleware from third party
app.use(express.static('public'));
app.use(morgan('dev'));

// make my own middleware
// app.use((req, res, next) => {
//     console.log('new request made');
//     console.log('host:', req.hostname);
//     console.log('path:', req.path);
//     console.log('method:', req.method);
//     console.log('-------------------------------');
//     next();
// });

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