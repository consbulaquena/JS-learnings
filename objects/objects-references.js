//expense tracker challenge


let myAccount = {
    name: 'Cons Bulaquena',
    expenses: 0,
    income: 0
}

let addExpense = function(account, amount) {
    account.expenses = account.expenses + amount
    console.log(account)
}


addExpense(myAccount, 2.50)
console.log(myAccount)

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


