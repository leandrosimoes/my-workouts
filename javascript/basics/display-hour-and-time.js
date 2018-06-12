/* 
    Exercice from https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

    Write a JavaScript program to display the current day and time in the following format:
        
        Sample Output : 
            Today is : Friday. 
            Current time is : 4 PM : 50 : 22
*/

/* My solution */

var currentDate = new Date();
var dateDetails = {
    day: currentDate.getDay(),
    hour: currentDate.getHours(),
    minutes: currentDate.getMinutes(),
    seconds: currentDate.getSeconds()
}
var dayString = 'Sunday';
var prepand = 'AM';

switch (dateDetails.day) {
    case 1:
        dayString = 'Monday'
        break;
    case 1:
        dayString = 'Tuesday'
        break;
    case 1:
        dayString = 'Wednesday'
        break;
    case 1:
        dayString = 'Thursday'
        break;
    case 1:
        dayString = 'Friday'
        break;
    case 1:
        dayString = 'Saturday'
        break;

    default:
        break;
}

prepand = dateDetails.hour > 12 ? 'PM' : 'AM';
dateDetails.hour = dateDetails.hour > 12 ? dateDetails.hour - 12 : dateDetails.hour; 

if (dateDetails.hour === 0 && prepand === 'PM') {
    prepand = 'Midnight'
} else if (dateDetails.hour === 0 && prepand === 'AM') {
    prepand = 'Noon'
}

console.log('My solution:');
console.log(`Today is : ${dayString}`);
console.log(`Current time is : ${dateDetails.hour} ${prepand} : ${dateDetails.minutes} : ${dateDetails.seconds}`);
console.log('');
console.log('');

/* Solution from site */
var today = new Date();
var day = today.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour >= 12) ? " PM " : " AM ";
hour = (hour >= 12) ? hour - 12 : hour;
if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon';
    }
    else {
        hour = 12;
        prepand = ' PM';
    }
}
if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight';
    }
    else {
        hour = 12;
        prepand = ' AM';
    }
}

console.log('Solution from website:');
console.log("Today is : " + daylist[day] + ".");
console.log("Current Time : " + hour + prepand + " : " + minute + " : " + second);