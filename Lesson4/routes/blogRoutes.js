const express = require('express');
const blogController = require('../controllers/blogcontroller');
const router = express.Router();
// importing blog after making blog model 
const Blog = require('../models/blog');

router.get('/', blogController.blog_index);
router.post('/', blogController.blog_create_post);
router.get('/create', blogController.blog_create_get);
router.get('/:id', blogController.blog_detail);
router.delete('/:id', blogController.blog_delete);

module.exports = router;