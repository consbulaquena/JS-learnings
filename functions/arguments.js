//multiple arguments in function
//a, b, c
// Add a+b

let add = function (a, b, c) {
    return a + b + c
}

//pass in value 10 for a, 1 for b
let result = add(10, 1, 5)
console.log(result)

// How to use default arguments
// Game leaderboard most points to least

let getScoreText = function (name, score = 10) {
    console.log(name)
    console.log(score)
}

getScoreText()

