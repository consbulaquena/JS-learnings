//Using sort

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
    text: 'Exercise lunges',
    completed: false
}, {
    text: 'Listen to Dave Ramsey',
    completed: false
}]

const sortTodos = function (todos) {
    todos.sort(function (a,b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos)










