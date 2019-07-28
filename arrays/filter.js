//filter() method creates a new array with all elements that pass the test implemented by the provided function.
//arrays
const todos =  [{
    title: 'Emergency Fund',
    body: 'Save 6 months for illness, job loss'
}, {
    title: 'Pay off debt',
    body: 'debt free'
    
}, {
    title: 'Invested mutual funds',
    body: '15% of income, for 60 years old'

}, {
    title: 'Invested pera retirement',
    body: 'For old age'
}]
 
const findNote = function (todos, todoTitle) {
    return todos.find(function (todo, index) {
    return todo.title.toLowerCase() === todoTitle.toLowerCase()
    })
}


const filteredTodos = todos.filter(function (todo, index) {
    const isTitleMatch = todo.title.toLowerCase().includes('retirement')
    const isBodyMatch = todo.body.toLowerCase().includes('retirement')
    return isTitleMatch || isBodyMatch

})
console.log(filteredTodos)

const todo = findNote(todos, 'Invested pera retirement')
console.log(todo)

