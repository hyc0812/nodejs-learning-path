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
app.use(express.urlencoded({ extended: true }));    // for form data (POST)
app.use(morgan('dev'));

// mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'New Blog 3',
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

// find all blogs
app.get('/all-blogs', (req, res) => {
    Blog.find()             // Here we use Blog but not blog
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        });
});

// find a blog by id
app.get('/single-blog', (req, res) => {
    Blog.findById('627582aa4fc70429789f2c92')
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

// redirect to blogs
app.get('/', (req, res) => {
    res.redirect('/blogs');
}); 

// render the blogs page to the index.ejs
app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: 'desc' }) // or using { createdAt: -1 }
        .then(result => {
            res.render('index', { title: 'All Blogs', blogs: result });
        })
        .catch(err => {
            console.log(err);
        })
});


// submit a new blog using post method to the database
app.post('/blogs', (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
        .then(result => {
            res.redirect('/blogs');
        })
        .catch(err => {
            console.log(err);
        })
});

app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('details', { blog: result, title: 'Blog Details' });
        })
        .catch(err => {
            console.log(err);
        })
});

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