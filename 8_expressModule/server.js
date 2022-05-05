// import http module
const http = require('http');
const fs = require('fs');
const _ = require('lodash');

// server has been created
const server = http.createServer((req, res) => {
    // lodash
    const num = _.random(0, 20);
    console.log(num);

    const greet = _.once(() => {
        console.log('hello');
    });

    greet();
    greet();
    


    // set header content type
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            console.log(res.statusCode);
            break;
        case '/index':
            path += 'index.html';
            res.statusCode = 200;
            console.log(res.statusCode);
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            console.log(res.statusCode);
            break;
        case '/about-me':
            //path += 'about.html';
            // redirect method at here
            res.statusCode = 301;
            console.log(res.statusCode);
            res.setHeader('Location', '/about');
            console.log(res.statusCode);
            //res.end();
            break;
            // ??? about-me why is output 200 rather than 301
        default:
            path += '404.html';
            res.statusCode = 404;
            console.log(res.statusCode);
            break;
    }
    // send response to the browser
    // read file from directory views/index.html
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();      // end the response
        } else {
            //res.write(data);
            res.end(data);
        }
    });
});

// server is listening to port 3000
server.listen(3000, 'localhost', () => {
    console.log('server is listening on port 3000');
});
