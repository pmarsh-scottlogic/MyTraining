const http = require('http');

// server is from the net module and is a child of EventsEmitter
// https://nodejs.org/docs/latest-v17.x/api/net.html#class-netserver
// we can construct server with a callback function, so that when there is a request, we can create a response. That's what the two object parameters are
const server = http.createServer((req, res) => {
    console.log("Request detected");

    // at this points we can see the url, and use this to provide different resources
    if (req.url === '/') {
        res.write("Hey there!");
        res.end();
    }
    else if (req.url === '/api/json') {
        res.write(JSON.stringify({name: 'Peter', age: 21, birthday: '28/03/2001'}));
        res.end();
    }
    else if (req.url.substring(0, 7) === '/twice/') {
        let x = parseInt(req.url.substring(7));
        if (!isNaN(x)) {
            res.write((x * 2).toString());
        }
        else {
            res.write(req.url.substring(6));
        }
        res.end();
    }
    else {
        res.write("Url not recognised: " + req.url);
        res.end();
    }
});

server.on('connection', (socket) => {
    console.log("connection detected");
})

server.listen(3000);
console.log("listening on port 3000");