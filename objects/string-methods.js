//string is the name
let name = 'Cons Bulaquena'

//Length property - there are 14 characters

console.log(name.length)

// Can validate number of passwords
//convert to upper case
//Using method <toUppercase()>

console.log(name.toUpperCase())

console.log(name.toLowerCase())

//.includes() method
//strong password by not having direct 1234 password
let password = 'g0ldrIdden1234'
console.log(password.includes('1234'))


console.log(name.trim())


//Challenge area
//is valid password

let isValidPassword = function (password) {
    if (password.length > 8 && !password.includes('password')) {
        return true
} else {
        return false
    }
}

console.log(isValidPassword('asfw'))

console.log(isValidPassword('asfwM4n1f1c3nt'))

console.log(isValidPassword('12quallpassword'))


//length is more than 8, and doesnt contain the word abcd


