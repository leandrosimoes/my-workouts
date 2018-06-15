/*
    Exercice from https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php

    Write a JavaScript function that checks whether a passed string is palindrome or not
        Note: A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run
    
        Expected Output :
            true or false

*/

/* My solution */
let itIs = 'Are we not pure? “No, sir!” Panama’s moody Noriega brags. “It is garbage!” Irony dooms a man—a prisoner up to new era'
let isIsAlso = 'Dennis, Nell, Edna, Leon, Nedra, Anita, Rolf, Nora, Alice, Carol, Leo, Jane, Reed, Dena, Dale, Basil, Rae, Penny, Lana, Dave, Denny, Lena, Ida, Bernadette, Ben, Ray, Lila, Nina, Jo, Ira, Mara, Sara, Mario, Jan, Ina, Lily, Arne, Bette, Dan, Reba, Diane, Lynn, Ed, Eva, Dana, Lynne, Pearl, Isabel, Ada, Ned, Dee, Rena, Joel, Lora, Cecil, Aaron, Flora, Tina, Arden, Noel, and Ellen sinned.'
let itIsNot = 'My beautiful text'
function isPalindrome(text = '') {
    let rgxRemoveSpecialChars = new RegExp(/[^À-úà-úA-Za-z0-9]+/g)
    text = text.toLowerCase();
    text = text.replace(rgxRemoveSpecialChars, '')

    return !!text && text.split('').reverse().join('') === text;
}

console.log('My solution:')
console.log(isPalindrome(itIs))
console.log(isPalindrome(isIsAlso))
console.log(isPalindrome(itIsNot))
console.log('')
console.log('')


/* Solution from site */
function check_Palindrome(str_entry) {
    // Change the string into lower case and remove  all non-alphanumeric characters
    var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
    var ccount = 0;
    // Check whether the string is empty or not
    if (cstr === "") {
        return false;
    }
    // Check if the length of the string is even or odd 
    if ((cstr.length) % 2 === 0) {
        ccount = (cstr.length) / 2;
    } else {
        // If the length of the string is 1 then it becomes a palindrome
        if (cstr.length === 1) {
            return true;
        } else {
            // If the length of the string is odd ignore middle character
            ccount = (cstr.length - 1) / 2;
        }
    }
    // Loop through to check the first character to the last character and then move next
    for (var x = 0; x < ccount; x++) {
        // Compare characters and drop them if they do not match 
        if (cstr[x] != cstr.slice(-1 - x)[0]) {
            return false;
        }
    }
    return true;
}

console.log('Solution from website:')
console.log(check_Palindrome(itIs))
console.log(check_Palindrome(isIsAlso))
console.log(check_Palindrome(itIsNot))
console.log('')
console.log('')

