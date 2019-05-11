//array with 5 todos

const todos = ['Work Hard', 'Pay Debt', 'Save Emergency Fund', 'Invest in mutual funds', 'Paid Off Mortgage']

// console.log(todos.pop())
// todos.pop()
// todos.push('My new note')

// console.log(todos.shift())

todos.splice(1, 1)


console.log(todos.length)
console.log(todos)

console.log(`You have ${todos.length} to-dos`)
console.log(`To-dos: ${todos[3]}`)
console.log(`To-dos: ${todos[4]}`)



//Challenge time
todos.forEach(function (todo, index) {
    const num = index + 1
    console.log(`${num}. ${todo}`)

})
