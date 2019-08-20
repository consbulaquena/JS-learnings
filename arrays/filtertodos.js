

const todos =  [{
    text: 'Wake up 6:30am',
    completed: true
}, {
    text: 'Create Shirt designs to sell',
    completed: true
}, {
    text: 'Code in Javascript',
    completed: false
}, {
    text: 'Listen to Dave Ramsey',
    completed: false
}]




//filter to get list of todos with complete value of false
//todo - subset of new todos
//filter array get subset back 
//! not completed so false
// another way ---> return todo.completed ===false

//function
const getThingsToDo = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed
    })
}

console.log(getThingsToDo(todos))
 
