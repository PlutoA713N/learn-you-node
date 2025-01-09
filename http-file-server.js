const http = require('http');
const fs = require("fs");

const port = process.argv[2];
const fileLocation = process.argv[3];

const server = http.createServer( (request, response) => {
    response.writeHead(200, {"content-type": "text/plain"})
    const readStream = fs.createReadStream(fileLocation, 'utf-8');
    readStream.pipe(response);
})

server.listen(port, () => {
    console.log("server connection estanlised on port:", port)
})

