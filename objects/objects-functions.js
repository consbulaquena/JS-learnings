
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

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} by ${book.pageCount} pages long`
    }
}

//book summary is an Object
let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

