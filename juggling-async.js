const http = require("http");
const bl = require("bl");
const async = require("async");
const runParallel = require("run-parallel");

const urls = process.argv.slice(2, 5);

//const getData = (url) => {
//
//    return new Promise((resolve, reject) => {
//        http.get(url, (response) => {
//            response.pipe(bl((err, data) => {
//                if (err) reject(error);
//                const responseData = data.toString()
//                resolve(responseData)
//            }))
//        })
//    })
//
//}
////
////const callURLS = async () => {
////    const data = await Promise.all(urls.map(getData))
////    data.forEach((metaData) => {
////        console.log(metaData)
////    })
////}
////
////
////callURLS();

// run-parallel solution

//const getData = (url, callback) => {
//
//        http.get(url, (response) => {
//            response.pipe(bl((err, data) => {
//                if (err) callback(err);
//                const responseData = data.toString()
//                callback(null, responseData)
//            }))
//    })
//
//}
//const callURLS = async (urls) => {
//
//    const arrayOfFunctions = urls.map((url) => {
//        return (callback) => getData(url, callback)
//    })
//
//    runParallel(arrayOfFunctions, (err, totalData) => {
//        if(err) return console.error(err)
//        totalData.forEach((data) => {
//            console.log(data)
//        })
//    })
//}


//callURLS(urls);

 // async solution

const getData = (url, callback) => {

        http.get(url, (response) => {
            response.pipe(bl((err, data) => {
                if (err) callback(err);
                const responseData = data.toString()
                callback(null, responseData)
            }))
    })

}
const callURLS = async (urls) => {

    const arrayOfFunctions = urls.map((url) => {
        return (callback) => getData(url, callback)
    })

    async.parallel(arrayOfFunctions, (err, totalData) => {
        if(err) return console.error(err)
        totalData.forEach((data) => {
            console.log(data)
        })
    })
}


callURLS(urls);