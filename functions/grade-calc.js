// students score, total possible score
// Goal: 15/20 -> You get a C (75%)!
// A 90 -100. B 80-89, C 70-79, D 60-69, F 0-59



let studentScore = 19
let totalScore = 20


let getScore = function (studentScore, totalScore) {
    let percent = (studentScore / totalScore) * 100
    if (percent >= 90) {
        return `You get A ${percent}%!`
    } else if (percent >= 80) {
        return `You get B ${percent}%!`
    } else if (percent >= 70) {
        return `You get C ${percent}%!`
    } else if (percent >= 60) {
        return `You get D ${percent}%!`
    } else if (percent >= 50) {
        return `You get F ${percent}%!`
    
    }
}

let result = getScore(17, 20)
console.log(result)
