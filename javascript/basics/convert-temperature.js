/*
    Exercice from https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

    Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit

        Expected Output :
            60°C is 140 °F
            45°F is 7.222222222222222°C 

*/

/* My solution */
let celcius = 60;
let fahrenheit = 45;

function celciusToFahrenheit(celciusDegrees) {
    return ((celciusDegrees / (5/9)) +32);
}
function fahrenheitToCelcius(fahrenheitDegrees) {
    return (fahrenheitDegrees - 32) * (5/9);
}

console.log('My solution:')
console.log(`${celcius} ºC is ${celciusToFahrenheit(celcius)} ºF`)
console.log(`${fahrenheit} ºF is ${fahrenheitToCelcius(fahrenheit)} ºC`)
console.log('')
console.log('')


/* Solution from site */

console.log('Solution from website:')
function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 
cToF(60);
fToC(45);
console.log('')
console.log('')