const notes = ['Note 1', 'Note 2', 'Note 3']


//splice replaces notes
// notes.splice(1, 1, 'This is new second note')

//Array 0 is 1, 1 is 2, 2 is 3 so it swap 3rd note

notes[2] = 'This is new third note'

console.log(notes)

console.log(notes.length)
console.log(notes[2])
console.log(notes[notes.length - 1])
// we use -1 to always access the last number 3
 

//Challenge time
// methods to manipulate arrays

const notes2 = ['Note 1', 'Note 2', 'Note 3', 'Note 4']

// Go to note 3 and delete note 3
notes2.splice(2, 1)

//put new item in the end

notes2.push('buycoffee')

// 3. remove first note 
notes2.shift()


console.log(notes2)



//***Header: Looping over Arrays
// forEach = Calls a defined callback function on each element of an array, 
// index - position of item in list
// Using forEach


const notes3 = ['Note 1', 'Note 2', 'Note 3', ]

notes3[2] = 'This now new note 3'

notes3.forEach(function (item, index) {
    console.log(index)
    console.log(item)
})

console.log(notes3)

//**Using forLoops */
// Counting... Increment 0,1,2

for (let count= 0; count <= 2; count++) {
    console.log(count)
}

// Counting... Decrement 2,1,0

for (let count2= 2; count2 >= 0; count2--) {
    console.log(count2)
}






