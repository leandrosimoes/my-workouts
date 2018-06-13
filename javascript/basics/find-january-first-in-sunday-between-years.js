/*
    Exercice from https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

    Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050

        Expected Output :
            The year where January 1st was in a Sunday (Ex: 2014)

*/

/* My solution */
let year = 2014;
let results = [];
while (year <= 2050) {
    if (new Date(year, 0, 1).getDay() === 0) {
        results.push(year);
    }    
    year = year + 1;
}
console.log('My solution:')
console.log(`Years with 1st January in a Sunday: ${results.join(', ')}.`)
console.log('')
console.log('')

/* Solution from site */
console.log('Solution from website:')
for (year = 2014; year <= 2050; year++)
    {
    var d = new Date(year, 0, 1);
    if ( d.getDay() === 0 )
        console.log("1st January is being a Sunday  "+year);
    }
