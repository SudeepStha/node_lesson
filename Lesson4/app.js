// after installing ejs 
const express = require('express')
// npm install morgan
const morgan = require('morgan');
// npm install mongoose
const mongoose = require('mongoose');
//importing routes
const blogRotutes = require('./routes/blogRoutes');
 
const app = express();

// connect to mongo DB
const dbURI = 'mongodb+srv://root:root@cluster0.zqj42ph.mongodb.net/node-tutorial';
// to connect mongoose to database
mongoose.connect(dbURI)
    .then((result) => 
        app.listen(3000)
    )
    .catch((error) => console.log(error));

//register view engine
app.set('view engine', 'ejs');

//listen for request
// app.listen(3000)

//middleware & static files like css, images, etc..
// app.use(express.static('public')); 
app.use(express.static('public', { 'extensions': ['html', 'htm', 'css', 'js'] }));
app.use(express.urlencoded({extended: true}));   //this will catch all the methods of routes and handles it.

// app.use(morgan('tiny'))
app.use(morgan('dev'))

// mongoose and mongo sandbox routes
// app.get('/add-blog', (req,res) => {
//     const blog = new Blog({
//         title: 'new blog 2.',
//         snippet: 'about new blog 1.',
//         body: 'body about new blog 1.'
//     }); 
//     blog.save()
//     .then((result) => {
//         res.send(result);
//         console.log('both',res,result);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// }); 

//get all the blogs
// app.get('/all-blogs', (req,res) => {
//     Blog.find()
//     .then((result) => {
//         res.send(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
// }); 

//get single blog by id
// app.get('/single-blog', (req,res) => {
//     Blog.findById('659ad7e1308c39fdbafe74d0')
//     .then((result) => {
//         res.send(result)
//     })
//     .catch((error) => {
//         console.log(error);
//     })
// })

app.get('/', (req, res) => {
    // const blogs  = [
    //     {title: "He went down the hill to catch up the train.", snippet: "But couldn't find the train in the station."},
    //     {title: "He was a manager of the sweet hotel.", snippet: "But the director of that hotel was not good as expected."},
    //     {title: "The sun rises from the east.", snippet: "And sets in the west."}
    // ]
    // res.render('index', {title: 'Home', blogs: blogs});

    res.redirect('/blog');
})

app.get('/about', (req, res) => {
    res.render('about',{title: 'About'});
})

// blogs
app.use('/blog',blogRotutes);


app.use((req,res) => {
    res.status(404).render('404', {title: 'Not found'});
})