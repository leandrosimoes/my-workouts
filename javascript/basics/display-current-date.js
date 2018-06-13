/* 
    Exercice from https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

    Write a JavaScript program to get the current date:
        
        Expected Output : 
            mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

/* My solution */
let currentDate = new Date();
let dateDetails = {
    day: currentDate.getDate(),
    month: currentDate.getMonth() + 1, //Yeah, yeah, I know ¬¬
    year: currentDate.getFullYear()
}

dateDetails.day = dateDetails.day > 9 
                    ? dateDetails.day.toString() 
                    : `0${dateDetails.day}`; 

dateDetails.month = dateDetails.month > 9 
                    ? dateDetails.month.toString() 
                    : `0${dateDetails.month}`; 

console.log('My solution:');
console.log(`${dateDetails.month}-${dateDetails.day}-${dateDetails.year}`);
console.log(`${dateDetails.month}/${dateDetails.day}/${dateDetails.year}`);
console.log(`${dateDetails.day}-${dateDetails.month}-${dateDetails.year}`);
console.log(`${dateDetails.day}/${dateDetails.month}/${dateDetails.year}`);
console.log('');
console.log('');


/* Solution from site */
var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 

console.log('Solution from website:');
today = mm+'-'+dd+'-'+yyyy;
console.log(today);
today = mm+'/'+dd+'/'+yyyy;
console.log(today);
today = dd+'-'+mm+'-'+yyyy;
console.log(today);
today = dd+'/'+mm+'/'+yyyy;
console.log(today);