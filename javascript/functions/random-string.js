/*
    Exercice from https://www.w3resource.com/javascript-exercises/javascript-function-exercise-20.php

    Write a JavaScript function that generates a string id (specified length) of random characters
        Note: Use this char list "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

        Expected Output :
            Random string in a specific length

*/

/* My solution */
function randomString(size = 6) {
    let result = ''
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split('');
    while (result.length < size) {
        let index = Math.ceil(Math.random() * chars.length - 1);
        result += chars[index];
    }
    return result;
}

console.log('My solution:')
console.log(randomString(8));
console.log('')
console.log('')


/* Solution from site */
function makeid(l) {
    var text = "";
    var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < l; i++) {
        text += char_list.charAt(Math.floor(Math.random() * char_list.length));
    }
    return text;
}
console.log('Solution from website:')
console.log(makeid(8));
console.log('')
console.log('')
