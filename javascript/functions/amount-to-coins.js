/*
    Exercice from https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php

    Write a JavaScript function to convert an amount to coins
        Note: Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
              Here 46 is the amount. and 25, 10, 5, 2, 1 are coins

        Expected Output :
            25, 10, 10, 1

*/

/* My solution */
function amountToCoin(amount, coins) {
    coins = coins.sort((a, b) => a >= b).reverse();

    let result = [];
    for (let i = 0; i < coins.length; i++) {
        let coin = coins[i];
        let countDown = amount;

        if (!!result && result.length > 0) countDown -= result.reduce((a, b) => a + b);

        while (countDown >= 0) {
            countDown -= coin;
            if (countDown >= 0) {
                result.push(coin);
            }
        }
    }

    return result;
}

console.log('My solution:')
console.log(amountToCoin(46, [50, 25, 10, 5, 1]).join(', '))
console.log('')
console.log('')


/* Solution from site */
console.log('Solution from website:')
function amountTocoins(amount, coins) {
    if (amount === 0) {
        return [];
    }
    else {
        if (amount >= coins[0]) {
            left = (amount - coins[0]);
            return [coins[0]].concat(amountTocoins(left, coins));
        }
        else {
            coins.shift();
            return amountTocoins(amount, coins);
        }
    }
}
console.log(amountTocoins(46, [25, 10, 5, 2, 1]))
console.log('')
console.log('')