// students score, total possible score
// Goal: 15/20 -> You get a C (75%)!
// A 90 -100. B 80-89, C 70-79, D 60-69, F 0-59



let studentScore = 20
let totalScore = 50


let getScore = function (studentScore, totalScore) {
    let percent = (studentScore / totalScore) * 100
    let letterGrade = ''

    if (percent >= 90) {
        letterGrade = 'A'
    } else if (percent >= 80) {
        letterGrade = 'B'
    } else if (percent >= 70) {
        letterGrade = 'C'
    } else if (percent >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    
    }
    return `You get ${letterGrade} (${percent}%)!`
}

//change here
let result = getScore(20, 50)
console.log(result)
