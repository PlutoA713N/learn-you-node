const fs = require("fs").promises;

//fs.readFile(process.argv[2], 'utf-8',(err, buffer) =>{
//    if(err){
//        return console.log(err)
//    }
//    try{
//        console.log( buffer.split('\n').length - 1 );
//    }catch(error){
//        console.log("Error reading the file::", error)
//    }
//})



const countLines = async(file) => {
    try{
        const buffer = await fs.readFile(file, 'utf-8');
        return console.log(buffer.split('\n').length - 1)
    }catch(err){
        console.log("Error reading the file::", err)
    }
}

countLines(process.argv[2])

