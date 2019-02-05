//Functions are sub program you can run again and again.
// Function - input (argument), code, output (return value)

let greetUser = function () {
    console.log('Welcome, admin!')
}

greetUser()
greetUser()
greetUser()

//End
//Square Function

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
//single argument passed to the function
let otherValue = square(10)


console.log(value)
console.log(otherValue)

// Challenge Area

//convert Fahrenheit to celcius

// Call a couple of times


let convertfahrenheit = function(F) {
    let celcius =  (F - 32) * 5/9
    return celcius
}

let value1 = convertfahrenheit(32)
let otherValue2 = convertfahrenheit(68)

console.log(value1)
console.log(otherValue2)



