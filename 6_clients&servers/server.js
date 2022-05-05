// import http module
const http = require('http');

// server has been created
const server = http.createServer((req, res) => {
    console.log('request was made: ' );
});

// server is listening to port 3000
server.listen(3000, 'localhost', () => {
    console.log('server is listening on port 3000');
    
});

// what is localhost?
// localhost is the computer on which the server is running
// what is the port number?
// port number is the number that the server is listening on
// like 'doors' into a computer

// we can open a brower and go to localhost:3000 to see the server
// we can also use the command line to see the server
// node server.js
// when we run the server, we can see the console.log message in the terminal
