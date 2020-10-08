/*
* comment here
*/


var firstName = 'Consor';
console.log(firstName);

//console.log('yoo');


//result John 28
var firstName = 'Johnny';
var age = 28;

console.log(firstName + ' ' + age);

//multiple variables then assign values
var job, isMarried;
job = 'teacher';
isMarried = false;


console.log(firstName + ' is a ' + age + job + '. Is he married? '+ isMarried);

//variable mutation

age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + job + '. Is he married? '+ isMarried);

//prompt input last name
var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);


var year = 2020;
var yearLucas = year - 22;

console.log(yearLucas);

//type of operator
var ageC = 22;
console.log(typeof ageC)

// If else statements

var firstName = 'Lucas';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is marrid! ');
} else {
    console.log(firstName + ' will hopefully marry soon!');
}



var isMarried = true;

if (isMarried) {
    console.log(firstName + ' is married! ');
} else {
    console.log(firstName + ' will hopefully marry soon!');
}

/*
*Boolean Logic
*/
//else if is for multiple ifs

var firstName = 'Angel';
var age = 16;

if (age < 13) {
    console.log(firstName + ' is a girl ');
} else if (age >= 13 && age < 20) {//between 13 and 20, true and true makes true
    console.log(firstName + ' is a teenager. ');

} else {
    console.log(firstName + ' is a woman ');
}


// Ternary Operator and Switch Statements

var firstname = 'Cons';
var age = 16;

// ? is if block, else block is colon:
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.')



// Switch statement
// use case if more than 4 else if

var job = 'teacher';
switch (job) {
    case 'teacher': //if
        console.log(firstName + ' teaches kid how to code ');
        break;
    case 'driver': //else
        console.log(firstName + ' teaches kid how to drive ');
    break;
    case 'maid': //else if
    console.log(firstName + ' teaches kid how to clean ');
    break;
    default:
        console.log(firstName + ' does something else ');

}


// Truthy and falsy values

// height is not defined so if False so printed False in else
var height;

height = 0;

if (height || height === 0) {
    console.log('Variable defined');
} else {
    console.log('variable has NOT defined')
}


//coding challenge
// Score calculate average
//calculating average score

var scoreJohn = (89 + 120 + 7) / 3;
var scoreMike = (90 + 100 + 11) / 3;
console.log(scoreJohn, scoreMike);


//print who wins

if (scoreJohn > scoreMike) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
//for draw
} else {
    console.log('There is a draw');
}

// FUNCTIONS
//Retirement calculator

function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1998);
var ageCons = calculateAge(1989);

//20 29 in console
console.log(ageJohn, ageCons)


// note: pasa pasa ang year, year is a box


function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if(retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');

    } else {
        console.log(firstName + ' is already retired.')
    }
}

yearsUntilRetirement(1992, 'Angel');
yearsUntilRetirement(1998, 'Lucas');
yearsUntilRetirement(1960, 'Chinkee');


































































































