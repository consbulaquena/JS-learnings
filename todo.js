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



//forstatement
// The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to be executed in the loop.



var str = "$";

for (var a = 0; a < 5; a++) {
  str = str + a;
}

console.log(str);
// expected output: "$01234"



//@12:27    
// 
//print items in order
//For statement


// for (let count = 0; count < todos.length; count++) {
//     const num = count + 1
//     const todo = todos[count]
//     console.log(`${num}. ${todo}`)
// }



//Find Note - Searching arrays

const findNote = function (notes, noteTitle) {
    const index = notes.findIndex(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
    return notes[index]
}


