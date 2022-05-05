// import http module
const http = require('http');
const fs = require('fs');

// server has been created
// req: request object
// res: response object
const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);
    // set header content type
    res.setHeader('Content-Type', 'text/html');

    // send response to the browser
    // read content of from file
    fs.readFile('./views/index.html', (err, data) => {
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
