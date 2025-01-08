const net = require("net");
const strftime = require("strftime")

const port = process.argv[2];

const server = net.createServer((socket) => {
    console.log(socket)
    socket.end(strftime("%F %H:%M") + '\n');
});

server.listen(port, () => {
   console.log("Connection established with the port:", port)
});