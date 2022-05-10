const express = require('express');
const blogController = require('../controllers/blogController');
const router = express.Router();

// render the blogs page to the index.ejs
router.get('/', blogController.blog_index);
// submit a new blog using post method to the database
router.post('/', blogController.blog_create_post);
router.get('/create', blogController.blog_create_get);
router.get('/:id', blogController.blog_details);
router.delete('/:id', blogController.blog_delete);


module.exports = router;
