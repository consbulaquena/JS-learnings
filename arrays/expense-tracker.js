const account = {
    name: 'Cons Bulaquena',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
    })
},

addIncome: function (description, amount) {
    this.income.push({
    description: description,
    amount: amount
    })
},

getAccountSummary: function () {
    let totalExpenses = 0
    let totalIncome = 0
    let accountBalance = 0

    this.expenses.forEach(function (expense) {
        totalExpenses = totalExpenses + expense.amount
    })

    this.income.forEach(function (income) {
        totalIncome = totalIncome + income.amount
    })

    accountBalance = totalIncome - totalExpenses


    return `${this.name} has a balance of $$(accountBalance). $${totalIncome} in income, $${totalExpenses} in expenses`

    }
}

account.addExpense('Rent', 100)
account.addExpense('Art materials', 50)
console.log(account.getAccountSummary())


// expense -> description, amount
// addexpense ->description, amount
// getAccountSummary ->total all expenses - Cons has $150 in expenses.

