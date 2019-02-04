//Global Scope (name)
    // Local (name)
        // Local
    // Local

let name = 'Andrew'

if (true) {

    if (true) {
        let name = 'Jen'
        console.log(name)
    }
}

//This will run Andew Global scope
if (true) {
    console.log(name)
}