// Lexical scope (static scope)
// Global scope - defined outside all code blocks

//These are basic rules in scopes:
//In a scope you can access variables defined in that scope or any parent.

//Scope Hierarchy:
// Global scope (varOne) - parent
    // Local Scope (varTwo) -sibling
        // local scope (varfour) - child and can acceess 2 parents, vartwo varOne
    // local scope (varThree) -sibling

let varOne = 'var1'

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)

    if (true) {
        let varFour = 'varFour'
        console.log(varTwo)
    }
}

if (true) {
    let varThree = 'varThree'
}