//const fs = require("fs") // for callbacks
//
//const directoryName = process.argv[2];
//const fileExtension = process.argv[3];
//
//
//fs.readdir(directoryName, (err, data) => {
//    if (err) {
//        return console.error(err)
//    }
//    try {
//        const list = data.filter((file) => file.endsWith('.' + fileExtension))
//        console.log(list.join("\n"))
//    } catch (error) {
//        console.log("Error reading directory::", error)
//    }
//})

//
//const fs = require("fs").promises
//
//const printFilesNames = async(directoryName, fileExtension) => {
//    try{
//        const filesList = await fs.readdir(directoryName)
//        const filteredFiles = filesList.filter(file => file.endsWith('.' + fileExtension))
//        console.log( filteredFiles.join('\n') );
//    }catch(error){
//        console.log("Error reading the directory::", error)
//    }
//}
//
//printFilesNames(process.argv[2], process.argv[3])


const path = require("path")
const fs = require("fs").promises

const printFilesNames = async (directoryName, fileExtension) => {
    try {
        const filesList = await fs.readdir(directoryName)
        const filteredFiles = filesList.filter(file => path.extname(file) === "." + fileExtension)
        console.log(filteredFiles.join('\n'));
    } catch (error) {
        console.log("Error reading the directory::", error)
    }
    
}

printFilesNames(process.argv[2], process.argv[3])

