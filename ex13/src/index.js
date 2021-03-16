function randomRangeNumber( minNumber, maxNumber ){
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber + maxNumber;
}
console.log(randomRangeNumber(10, 100))

module.exports = randomRangeNumber;