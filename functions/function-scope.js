// Scope tree
// Global scope ( convert fah to celcius, temp one, temp two)
    //Local scope cel,fah)
        //Local scope (isFreezing)

// Functions create scopes
// Functions are bound to that scope




//Global scope
let convertfahrenheit = function(fahrenheit) {
    
    //Local scope
    let celcius =  (fahrenheit - 32) * 5/9
   
    //Local scope 2
    if (celsius <=0) {
        let isFreezing = true
    }
    return celcius
}

//Global scope
let tempOne = convertfahrenheit(32)

//Global scope
let tempTwo = convertfahrenheit(68)

console.log(tempOne)
console.log(tempTwo)