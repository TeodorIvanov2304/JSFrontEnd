//Concatenating
let text = 'Hello,' + ', ';
text += 'JS!';
console.log(text);

let greet = 'Hello, ';
let name = 'John';
let result = greet.concat(name);
console.log(result);


//Searching for substring

//indexOf
let str1 = 'Dead man walking';
console.log(str1.indexOf('Dead'));
console.log(str1.indexOf('dead')); // -1 == not found

//lastIndexOf
let str2 = 'Intro to programing';
let last = str2.lastIndexOf('o');
console.log(last); //11


//Extracting substring
//substring(startIndex, endIndex)
let str3 = 'Dead man walking';
let sub = str3.substring(5,str3.length);
console.log(sub);

//replace(search, replacement) - replaces the first result
let text2 = 'Hello, john@softuni.bg, you have been using john@softuni.bg in your registration.';
console.log(text2);
let replacedText = text2.replace('.bg','.com');
console.log(replacedText);

//split(separator)
let text3 = 'I love fruits';
let words = text3.split(' ');
console.log(words);

//includes(substring) - returns predicate
let text4 = 'I love vegetables';
console.log(text4.includes('vegetables'));
console.log(text4.includes('onion'));

//repeat(count) - creates a new string repeated count times
let n = 3;
for (let i = 1; i <= n; i++) {
    console.log('*'.repeat(i));    
}

//trim - remove white spaces from both ends of a string
let text5 = '  Annoying spaces              ';
console.log(text5.trim());

//trimStart() and trimEnd() - removing white spaces in the beginning or at the end
let text6 = '  Annoying spaces              ';
text6 = text6.trimStart();
text6 = text6.trimEnd();
console.log(text6);

//startsWith() - determine wheter a string begins with the characters of a specific substring
let text7 = 'My name is John';
console.log(text7.startsWith('My')); // true

//endsWith() - determine wheter a string ends with the characters of a specific substring
let text8 = 'My name is John';
console.log(text8.endsWith('John')); // true

//padStart - add to the current string another substring at the start until a length is reached
let text9 = '010';
console.log(text9.padStart(18,'h'));

//padEnd - add to the current string another substring at the end until a length is reached
let text10 = 'He ran away again';
console.log(text10.padEnd(20,'.'));
