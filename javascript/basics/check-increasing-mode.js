/*
    Exercice from https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

    Write a JavaScript program to check if three given numbers (integers) are increasing
    in strict mode and flag is "false", however if "true" is false the numbers will in soft mode
    Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31

        Expected Output :
            'Strict mode' or 'Soft mode'

*/

/* My solution */
let strict = [23, 26, 32, 45];
let soft = [23, 26, 22, 45];

function checkIncreasingMode(integers) {
    let mode = 'Strict mode';
    let before = -1

    integers.forEach(i => {
        if (i <= before) {
            mode = 'Soft mode';
        }
        before = i;
    });

    return mode;
}

console.log('My solution:')
console.log(checkIncreasingMode(strict));
console.log(checkIncreasingMode(soft));
console.log('')
console.log('')


/* Solution from site */
console.log('Solution from website:')
function number_order(x, y, z) {
    if (y > x && z > y) {
        return "strict mode";
    }
    else if (z > y)
        return "Soft mode";
    else
        return "Undefinded";
}
console.log(number_order(...strict));
console.log(number_order(...soft));
console.log('')
console.log('')
