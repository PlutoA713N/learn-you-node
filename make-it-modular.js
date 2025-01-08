const filterFiles = require('./mymodule')

const directoryName = process.argv[2];
const fileExtension = process.argv[3];


filterFiles(directoryName, fileExtension, (err, data) => {

    if (err) return console.error(err);
    data.forEach(file => {
        console.log(file)
    })
})