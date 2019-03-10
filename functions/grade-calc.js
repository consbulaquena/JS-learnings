// students score, total possible score
// Goal: 15/20 -> You get a C (75%)!
// A 90 -100. B 80-89, C 70-79, D 60-69, F 0-59





let getTip2 = function (total, tipPercent = .2) {
    let score = (studentScore / totalScore) * 100
    let tip2 = total * tipPercent
    return `A ${percent} tip on ${total} would be ${tip2}`
}

let tip2 = getTip2(60)
console.log(tip2)
