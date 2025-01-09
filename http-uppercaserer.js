const http = require("http");
const through2Map = require("through2-map");

const port = process.argv[2];

const server = http.createServer((request, response) => {

        if (request.method !== "POST") {
          return response.end("Only post request is accepted!")
        }

        let body = '';
        console.log(request.method)

        request.pipe(through2Map((chunk) => {
            return chunk.toString().toUpperCase()
        })).pipe(response)
});

server.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});
