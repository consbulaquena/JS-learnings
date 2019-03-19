//expense tracker challenge
// Learn how fuctions objects work together


let myAccount = {
    name: 'Cons Bulaquena',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}


let addIncome= function (account, income) {
    account.income = account.income + income
}

// reset
let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}


let getSummary = function (account) {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has ${balance} income $ ${account.income} expenses ${account.expenses}`
}

//Use the functions above
addIncome(myAccount, 5000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 500)
console.log(getSummary(myAccount))

resetAccount(myAccount)
console.log(getSummary(myAccount))


