const Blog = require('../models/blog');

const blog_index = (req,res) => {
    Blog.find().sort({createdAt: -1})
    .then((result) => {
        res.render('index', {title: 'All BLogs', blogs: result})
    })
    .catch((error) => {
        console.log(error)
    })
}

const blog_create_post = (req,res) => {
    const blog = new Blog(req.body);

    blog.save()
    .then((result) => {
        res.redirect('/')})
    .catch((error) => {
        console.log(error);
    })
}

const blog_create_get = (req,res) => {
    res.render('create', {title: 'Create Blog'});
}


const blog_detail = (req,res) => {
    const id = req.params.id;
    Blog.findById(id)
    .then(result => {
        res.render('details', { blog: result, title: 'Blog Details'})
    })
    .catch(err => {
        console.log('id error',err);
        res.status(404).render('404',{title: 'Blog not found!!!'});
    })
}

const blog_delete = (req,res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then(result => {
        res.json({redirect: '/'})
    })
    .catch(err => {
        console.log(err)
    })
}

module.exports = {
    blog_index,
    blog_detail,
    blog_create_get,
    blog_create_post,
    blog_delete
}