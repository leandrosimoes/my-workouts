/* 
    Exercice from https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

    Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7:
        
        Expected Output : 
            Float number with the area
*/

/* My solution */
let sides = [5,6,7];
let s = sides.reduce((a,b) => a + b) / 2;
sides = sides.map((a) => s - a);
let result = Math.sqrt(s * sides[0]*sides[1]*sides[2]);

console.log('My solution:');
console.log(result);
console.log('');
console.log('');

/* Solution from site */
var side1 = 5; 
var side2 = 6; 
var side3 = 7; 
var perimeter = (side1 + side2 + side3)/2;
var area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));

console.log('Solution from website:');
console.log(area);