/*
    Exercice from https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php

    Write a JavaScript function which says whether a number is perfect
            Note: According to Wikipedia : In number theory, a perfect number is a positive integer 
                  that is equal to the sum of its proper positive divisors, that is, the sum of its 
                  positive divisors excluding the number itself (also known as its aliquot sum). 
                  Equivalently, a perfect number is a number that is half the sum of all of its 
                  positive divisors (including itself).
         Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, 
                  and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive
                  divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. 
                  This is followed by the perfect numbers 496 and 8128

        Expected Output :
            X is a perfect number
            Y is NOT a perfect number
            
*/

/* My solution */
function getPositiveDivisors(n) {
    let divisor = 1;
    let divisors = [0];
    while (divisor < n) {
        if (n % divisor === 0) {
            divisors.push(divisor);
        }

        divisor++;
    }
    return divisors;
}
function isPerfect(number) {
    let sum = getPositiveDivisors(number).reduce((a, b) => a + b);
    if (sum === number && ((sum + number) / 2) === number) {
        console.log(`${number} is a perfect number`);
        return;
    }

    console.log(`${number} is NOT a perfect number`);
}

console.log('My solution:')
let numbers = [1, 6, 25, 28, 330, 496, 8128, 15326];
numbers.forEach(isPerfect);
console.log('')
console.log('')


/* Solution from site */
function is_perfect(number) {
    var temp = 0;
    for (var i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            temp += i;
        }
    }

    if (temp === number && temp !== 0) {
        console.log(number + " is a perfect number.");
    }
    else {
        console.log(number + " is not a perfect number.");
    }
}

console.log('Solution from website:')
numbers.forEach(is_perfect);
console.log('')
console.log('')
