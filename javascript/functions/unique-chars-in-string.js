/*
    Exercice from https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

    Write a JavaScript function to extract unique characters from a string
        Note: Given the "thequickbrownfoxjumpsoverthelazydog" string

        Expected Output :
            "thequickbrownfxjmpsvlazydg"

*/

/* My solution */
function getUniqueChars(text = '') {
    let result = '';
    text.toLowerCase().replace(/\s/g, '').split('').forEach((c) => result += (result.indexOf(c) > -1 ? '' : c));
    return result;
}

console.log('My solution:')
console.log(getUniqueChars('thequickbrownfoxjumpsoverthelazydog'))
console.log('')
console.log('')


/* Solution from site */
function unique_char(str1) {
    var str = str1;
    var uniql = "";
    for (var x = 0; x < str.length; x++) {

        if (uniql.indexOf(str.charAt(x)) == -1) {
            uniql += str[x];

        }
    }
    return uniql;
}

console.log('Solution from website:')
console.log(unique_char("thequickbrownfoxjumpsoverthelazydog"))
console.log('')
console.log('')