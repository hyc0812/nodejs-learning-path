// People call this file App.js using express module
const express = require('express');

// express app
const app = express();

// register view engine, important
app.set('views', './views');
app.set('view engine', 'ejs');


// listen for requests
app.listen(3000);


app.get('/', (req, res) => {
    const blogs = [
        // { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.' },
        // { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.' },
        // { title: 'Link finds secret', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.' },
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