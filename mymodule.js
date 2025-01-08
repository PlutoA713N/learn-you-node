const path = require("path")
const fs = require("fs")

const printFilesNames = (directoryName, fileExtension, callback) => {

    fs.readdir(directoryName, (err, data) => {
        if(err) return callback(err);
        const files = data.filter((file) => path.extname(file) === "." + fileExtension)
         callback(null, files)
    })
}

module.exports = printFilesNames;