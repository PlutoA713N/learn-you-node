let totalSum = 0;
    process.argv.slice(2).forEach((number) => {
        totalSum += +number
    })

console.log(totalSum);