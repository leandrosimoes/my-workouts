/*
    Exercice from https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

    Write a JavaScript program to check a given string contains 2 to 4 numbers of a specified character

        Expected Output :
            True or false

*/

/* My solution */
let text = 'My beautiful text'
function hasMoreThan2of4Char(text = '', char = '') {
    let count = text.split('').filter(a => a === char).length;
    return count >= 2 && count <= 4;
}

console.log('My solution:')
console.log(hasMoreThan2of4Char(text, 'e'));
console.log(hasMoreThan2of4Char(text, 'z'));
console.log('')
console.log('')


/* Solution from site */
console.log('Solution from website:')
function check_char(str, char)
 {
  ctr = 0;
  for (let i = 0; i < str.length; i++)
  {
    if (str.charAt(i) == char) {
      ctr++;
    }
  }
  return (ctr >= 2 && ctr <= 4);
}
console.log(check_char(text, 'e'));
console.log(check_char(text, 'z'));



