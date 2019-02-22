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
// name socre undefined if not defined
//default name, score values Anon and 10

let getScoreTest = function (name = 'Anonymous', score = 10) {
    console.log(name)
    console.log(score)
}

let scoreTest = getScoreTest(undefined, 99)
console.log(scoreTest)


// Challenge area Tip Calculator
// total, tipPercent .5 , .2


let getTip = function (total, tipPercent = .2) {
    return total * tipPercent

}

let tip = getTip(90)
console.log(tip)








