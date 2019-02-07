//undefined variable

let name

if (name === undefined) {
    console.log('Plese provide name')
} else {
    console.log(name)
}

//Undefined function arguments
// Undefined as function return default variable

let square = function(num) {
    console.log(num)
}

let result = square()
console.log(result)

//Null as assigned value, assigned by developer
let age = 27

age = null
console.log(age)