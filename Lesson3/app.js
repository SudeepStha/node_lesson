// to create an express app after installing express from npm

const express = require('express')

//creating express app
const app = express();

app.listen(3000)

app.get('/', (req, res) => {
    // instead of res.write() and res.end(). we can write this to send text
    // res.send('<p>This is my world.</p>')

    //to send file in the route or for routing
    res.sendFile('./views/index.html', {root: __dirname})
})

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', {root: __dirname})
})

//redirecting in just like server.js page
app.get('/about-get', (req,res) => {
    res.redirect('/about');
})

//404 page. this route should be written in last because the code will run from top to bottom
app.use((req,res) => {
    // res.sendFile('./views/404.html', {root: __dirname}) // root should be written to find the file path
    // status() is written in front to let route know to display this page only when status is 404
    res.status(404).sendFile('./views/404.html', {root: __dirname}) 
})