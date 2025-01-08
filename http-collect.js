const http = require("http");

const url = process.argv[2];

http.get(url, (response) => {
    let responseData = ''
    response.setEncoding("utf-8");

    response.on("error", console.log)
    response.on("data", (data) => responseData += data);
    response.on("end", () => {
   console.log(responseData.length)
     console.log(responseData)
 })

}).on("error", console.log)


//const bl = require("bl");
//
//http.get(url, (response) => {
//    response.pipe(bl ( (err, data) => {
//        const responseData = data.toString()
//        if(err) return console.error(err);
//         console.log(responseData.length)
//          console.log(responseData)
//    }))
//    response.on("error", console.error)
//}).on("error", console.log)


//
//const concatStream = require("concat-stream");
//
//http.get(url, (response) => {
//    response.pipe(concatStream ( (data) => {
//        const responseData = data.toString()
//        console.log(responseData.length)
//        console.log(responseData)
//    }))
//
//    response.on("error", console.error)
//}).on("error", console.log)


