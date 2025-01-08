const http = require('http')

const url = process.argv[2];

// Make a GET request to the other server
http.get(url, (response) => {
   response.setEncoding('utf-8')

   response.on("error", (error) => console.log("An error occured while reading the stream:", error))

   response.on('data', (data) => {
       console.log(data)
   })

   //response.on("end", () => console.log("Successfully received the data."))
}).on("error", console.error)