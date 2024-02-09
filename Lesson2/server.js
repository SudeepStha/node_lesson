const http = require('http');
const fs = require('fs');
const _ = require('lodash')

const server  = http.createServer((req, res) => {
    // console.log('request sent')
    // console.log('req',req.url, req.method)

//--------------------
    // send header content type
    // res.setHeader('Content-Type', 'application/json');
    // res.write('this is sending content type.');
    // res.end();

    // to send html from content type
    // res.setHeader('Content-Type', 'text/html');
    // res.write('<p style="font-size: 30px;">This is an HTML content type paragraph.</p>')
    // res.write('<p>Hello Programmer, this is an html type of content.</p>')

    // returning html page
    // res.setHeader('Content-Type', 'text/html')
    // fs.readFile('./views/index.html', (err, data) => {
    //     if(err){
    //         console.log(err);
    //         res.end();
    //     }else{
    //         res.write(data);
    //         res.end();
    //     }
    // })


//-------------------
    //to send a page in web.
    res.setHeader('Content-Type', 'text/html');
    let path = './views/';
    
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-we': //this case is used to redirect page
            res.statusCode = 301; 
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 400;
            break;
    }

    fs.readFile(path, (err,data) => {
        if(err){
            console.log(err);
            res.end();
        }else{
            // res.write(data);
            // res.end();

            //instead of those two line code we can use this one line code.
            res.end(data);
        }
    })

//--------------------------
    //after installing package lodash
    const num = _.random(0, 20);
    console.log(num);

    const greet = _.once(() => {
        console.log('hello')
    })

    greet() 
    
})

server.listen(3000, 'localhost', () => {
    console.log('this is log for listening server in port 3000.')
})