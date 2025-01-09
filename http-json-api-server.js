const http = require("http");
const url = require("url");
const port = process.argv[2];

const server = http.createServer((request, response) => {

    const parsedUrl = url.parse( request.url, true)
    const isoValue = parsedUrl.query.iso;

    response.setHeader('content-type', 'application/json');
    response.statusCode = 200

    const time = (isoValue) => {
        const date = new Date(isoValue);
        return { time : {
                "hour": date.getHours(),
                "minute": date.getMinutes(),
                "second": date.getSeconds(),
            },
            unix : date.getTime()
        }
    }

    if(request.method !== "GET"){
        response.statusCode = 405
        response.end("Please send only GET requests")
    }

    if(parsedUrl.pathname === '/api/parsetime'){
        response.end(JSON.stringify(time(isoValue).time))
    }


    if(parsedUrl.pathname === '/api/unixtime'){
        response.end(JSON.stringify({unixtime: time(isoValue).unix}))
    }
})

server.listen(port, () => {
    console.log("Server listening on port:", port);
})