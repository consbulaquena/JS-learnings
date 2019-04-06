let num = 103.941

//customized amount of decimal places
console.log(num.toFixed(2))

console.log(Math.round(num))


//Generating a random number
let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

//Math.floor makes decimal to whole
// 0 - 10
console.log(randomNum)

//Challenge are Guessing what is the random number
//1 - 5 True, if not correct false

//                      The guess is user input
let makeguess = function(guess) {
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
  
    return guess === randomNum
}

console.log(makeguess(1))






