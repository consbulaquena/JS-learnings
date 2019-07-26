const todos =  [{
    title: 'Emergency Fund',
    completed: true
}, {
    title: 'Retirement',
    completed: false
}, {
    title: 'Investing 15%',
    completed: false
}]
 
const deleteTodo = function (todos, todoText) {
const index = todos.findIndex(function (todo) {
    return todo.title.toLowerCase() === todoText.toLowerCase()
})

    if (index > -1){
        todos.splice(index, 1)
    }
}
 
deleteTodo(todos, 'retirement')
console.log(todos)
