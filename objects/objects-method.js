// seat tracker
// Method is object property whose value is a function

let restaurant = {
    name: `ASB`,
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize) {
        console.log(partySize)
    }
}

restaurant.checkAvailability(4)


//function subtract, partySize i argument
// if seat 4 people


