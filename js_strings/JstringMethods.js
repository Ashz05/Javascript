// String Methods 

//Javascript Length 
//length property returns the length of string 

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lengthText = text.length;
console.log(lengthText);

//Extracting string character

/* There are 4 methods for extracting string character 

at(position) method 
charAt(position) method 
charCodeAt(position) method 
using property access [] like arrays 

*/


console.log(text[0]); //[position] extracts the index value and give the string in that index position 
console.log(text.charAt(0)); 
asciiCodeCharacter = text.charCodeAt(0);// console.log(text.codePointAt(0));
console.log(String.fromCharCode(asciiCodeCharacter));
console.log(text.at(0));


//Property access string[index] might be little unpredictable:

/* 
It makes strings look like arrays(but they are not)
If no character is found, [] returns undefined, while charAt()
returns an empty string 
property access is read only, but str[0] = "A" gives no error in 
"sloppy mode"

*/

let character = "Welcome to Javascript";
character = character.replace("W","H")
console.log(character);

"Using strict"

try{
    character[0] = "W"
}
catch(err){
    character = err.message;
    console.log(character)
}

//Concat() Joins two or more strings 

let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(text2);

console.log(text3);

//String slicing 
/These are 3 methods for extracting a part of string: /
/*
slice(start,end)
substring(start,end)
substr(start,length) -->
*/
let slicedText = text1.slice(1,3);
console.log(slicedText);


console.log(text1.slice(-1));
console.log(text1.substring(0,3)); //same as slice but it slice all the other value if the second parameter is empty 
//The difference is that start and end values less than 0 are treated as 0 in substring().

//Converting upper and lower Case 

let char = "Alphabet";
console.log(char.toUpperCase());
console.log(char.toLowerCase());

//isWellFormed()
//The isWellFormed() method returns true if a string is well formed

//otherwise it returns false 

char = "alphabet \uD800"
console.log(char.isWellFormed());

//Trim 
/trim() method removes whitespace from both sides of a string/

let char1 = "   Hello World!  ";
let trimChar2 = char1.trim();
let trimChar3 = char1.trimStart();
// let trimChar4 = char1.trimEnd();
console.log(char1);
console.log(trimChar2);
console.log(trimChar3);

//Padding 

//Added two new string methods to javascript 
//padStart() and padEnd() to support padding at the beginning and at the end of a string 

//padStart() method pads a string from the start 

let unpadValue = "5";
// let padValue = unpadValue.padStart(3,"0")
let padValue = unpadValue.padEnd(3,"0")

console.log(padValue);

//String repeat()
//the repeat() method returns a string with a number of copies of a string 

//the repeat() method returns a new string 
//the repeat() method doesn't change the original string 

let repeatWord = "Hello";
console.log(repeatWord.repeat(2));

let newtext = "Please visit Javascript!";
let replaceText = newtext.replace("Please", "Do");
console.log(replaceText);
//by default, the replace() method replaces only the first match 


//Replace all 

newtext = "Please visit Javascript, Please give ratings!";
// replaceText = newtext.replace("Please","Do");
replaceText = newtext.replaceAll("Please","Do"); //ES2021 
console.log(replaceText);

//String split() 
//A String can be converted to an array with the split() 

let summaryText = "Welcome , To JavaScript Course!";
let spacedText = "Hi! Welcome!";

// If the parameter is (""), the returned array will be an array of single characters:
console.log(spacedText.split(" "));
console.log(summaryText.split(","));