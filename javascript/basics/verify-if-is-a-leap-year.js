/*
    Exercice from https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

    Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar

        Expected Output :
            Just if year is or not a leap year

*/

/* My solution */
function veriyfIfIsALeapYear(year = new Date().getFullYear()) {
    let isLeapYear = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
    console.log(`${year}${isLeapYear ? ' is ' : ' is not '}a leap year!`);
}

[2018, 2019, 2020, 2021, 2022, 2023, 2024].forEach(veriyfIfIsALeapYear);
console.log('')
console.log('')

/* Solution from site */
var year = window.prompt("Input a Year : ");
var x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
console.log(x);