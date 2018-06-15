/*
    Exercice from https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

    Write a JavaScript program to remove a character at the specified position of a given string and return the new string

        Expected Output :
            The string given without the char on the position given

*/

/* My solution */
let text = 'My beautiful text!'
function removeCharAt(text = '', position = -1) {
    return text.split('').filter((a, i) => i !== position).join('');
}

console.log('My solution:')
console.log(removeCharAt(text, 3));
console.log('')
console.log('')


/* Solution from site */
console.log('Solution from website:')
text = 'My beautiful text!'
function remove_character(str, char_pos) {
    part1 = str.substring(0, char_pos);
    part2 = str.substring(char_pos + 1, str.length);
    return (part1 + part2);
}
console.log(remove_character(text, 3))
console.log('')
console.log('')