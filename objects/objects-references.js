//expense tracker challenge



//1 add income take acct to manipulate, income for, take income try add
//2 reset account reset expenses/income to zero
//3 Get account summary - act bounce total expense, income -
// Account for Cons has 900 dollars , 1000 in income, 100 in expenses

//use functions

//addincome
// addExpense
// getAccountSummary
// resetAccount
// getAccountSummary


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


