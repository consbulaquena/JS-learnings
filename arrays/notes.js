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




