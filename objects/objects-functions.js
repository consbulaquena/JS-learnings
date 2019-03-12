
// learned how to pass object into a function

let myBook = {
    title: 'Total Money Makeover',
    author: 'Dave Ramsey',
    pageCount: 256
}


let otherBook = {
    title: 'The Wealth of Nations',
    author: 'Adam Smith',
    pageCount: 524
}

// 1 line for every single book
// passing object above into a function
//getsummary returns multiple values via template strings

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} with ${book.pageCount} pages long`
    }
}

//book summary is an Object
let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)


//Challenge area of Converting fah returning object
//convert fah to both celcius and kelvin
// create func, take fahrenheit, return object


let convertfahrenheit = function(fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celsius: (fahrenheit - 32) * 5/9,
        kelvin: (fahrenheit + 459.67) * 5/9,  
    }
}

let temp = convertfahrenheit(65)

console.log(temp)


