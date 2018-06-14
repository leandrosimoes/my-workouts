/*
    Exercice from https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

    Write a JavaScript program to calculate days left until next Christmas

        Expected Output :
            The number of days left

*/

/* My solution */
let currentDate = new Date();
let nextChristmasDate = new Date(currentDate.getFullYear(), 11, 25);

nextChristmasDate = currentDate.getDate() > 25 && currentDate.getMonth() > 10
                        ? nextChristmasDate = new Date(currentDate.getFullYear() + 1, 11, 25)
                        : nextChristmasDate;

let daysLeft = Math.ceil((nextChristmasDate - currentDate) / 1000 / 60 / 60 / 24)

console.log('My solution:')
console.log(`${daysLeft} left for next Christmas!`)
console.log('')
console.log('')
/* Solution from site */

console.log('Solution from website:')
today=new Date();
var cmas=new Date(today.getFullYear(), 11, 25);
if (today.getMonth()==11 && today.getDate()>25) 
{
cmas.setFullYear(cmas.getFullYear()+1); 
}  
var one_day=1000*60*60*24;
console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day)) + " days left until Christmas!");
console.log('')
console.log('')