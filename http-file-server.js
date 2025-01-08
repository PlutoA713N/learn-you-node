const http = require('http');
const fs = require("fs");

const port = process.argv[2];
const fileLocation = process.argv[3];

const server = http.createServer( (request, response) => {
})

server.listen(port, () => {
    console.log("server connection estanlised on port:", port)
})

fs.createReadStream()