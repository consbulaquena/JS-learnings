let temp = 4

// Logical and Operator
// && - "And" logical operatpr - true if Both sies, 
// ||- Logical "Or" operator - true atleast One


if (temp >= 60 && temp <= 90) {
    console.log('Its nice out there')

} else if (temp <=0 || temp >= 120 ) {
    console.log('Do not go outside')
} else {
    console.log('Do what you want')
}

// Challenge area

let isGuestOneAllergic = false
let isGuestTwoAllergic = false

// Are both allergic to milk? Only offer soy milk
// At least one allergic to milk? Make sure offer 1 non-allergen options
// Else, offer all types of milk.
//isGuestOneAllergic is already a boolean for the condition

if (isGuestOneAllergic && isGuestTwoAllergic) {
    console.log('Only offer soy milk')
} else if (isGuestOneAllergic || isGuestTwoAllergic) {
    console.log('Make sure offer 1 non-allergen options')
} else {
    console.log('offer all types of milk.')
}










