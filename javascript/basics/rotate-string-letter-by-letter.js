/* 
    Exercice from https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

    Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front:
        
        Expected Output : 
            'ew3resourc'
            'cew3resour'
            'rcew3resou'
            'urcew3reso'
            'ourcew3res'
            'sourcew3re'
            'esourcew3r'
            'resourcew3'
            '3resourcew'
            'w3resource'
*/

/* 
    My solution 
    
    PS: The description of the site didn't mention that I have to 
        print the results with animation at a HTML page, so I didn't!
*/
let text = 'w3resource';
let result = text;
console.log(result)
text.split('').forEach(() => {
    result = result[result.length - 1] + result.substr(0, result.length - 1);
    console.log(result)
});
console.log('')
console.log('')

/* Solution from site */
function animate_string(id) {
    const element = document.getElementById(id);
    const textNode = element.childNodes[0]; // assuming no other children
    let text = textNode.data;

    setInterval(() => {
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        textNode.data = text;
    }, 100);
}