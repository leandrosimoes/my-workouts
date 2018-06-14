/*
    Exercice from https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

    Write a JavaScript program where the program takes a random integer between 1 to 10, the 
    user is then prompted to input a guess number. 

        Expected Output :
            If the user input matches with guess number, the program will display a message 
            "Good Work" otherwise display a message "Not matched"

*/

/* My solution */
let randomNumber = Math.floor(Math.random() * 10) + 1;
let userEntry = Math.floor(Math.random() * 10) + 1;

console.log('My solution: ')
console.log('   PS* I simulate the user entry, because Im working with javascript only ')
console.log('')
console.log(`${randomNumber === userEntry ? 'Good Work' : 'Not matched'}`)
console.log('')
console.log('')


/* Solution from site */
console.log('Solution from website:')
var num = Math.ceil(Math.random() * 10);
// var gnum = prompt('Guess the number between 1 and 10 inclusive'); original from website
var gnum = userEntry; //simulating user entry
if (gnum == num)
    console.log('Matched');
else
    console.log('Not matched, the number was ' + num);

console.log('')
console.log('')