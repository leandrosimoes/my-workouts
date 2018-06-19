/*
    Exercice from https://www.w3resource.com/javascript-exercises/javascript-recursion-functions-exercises.php

    Write a JavaScript program to calculate the factorial of a number
        Note: In mathematics, the factorial of a non-negative integer n, denoted by n!, 
              is the product of all positive integers less than or equal to n. 
              For example, 5! = 5 x 4 x 3 x 2 x 1 = 120

        Expected Output :
            Integer with the result

*/

/* My solution */
function factorial(number) {
    return number === 1 ? number : number * factorial(--number);
}

console.log('My solution:')
console.log(factorial(5));
console.log('')
console.log('')


/* Solution from site */
function fact(x) {

    if (x === 0) {
        return 1;
    }
    return x * fact(x - 1);

}

console.log('Solution from website:')
console.log(fact(5));
console.log('')
console.log('')