const account = {
    name: 'Cons Bulaquena',
    expenses: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
    })
},





// expense -> description, amount
// addexpense ->description, amount
// getAccountSummary ->total all expenses - Cons has $150 in expenses.

account.addExpense('Rent', 100)
account.addExpense('Art materials', 50)
console.log(account.getAccountSummary())
