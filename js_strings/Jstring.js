/* String are for storing text 
string are written with quotes */

let text = "Jhon Doe";

let carName1 = "Volvo XC60";
let answer1 = "It's alright";

/* you can use quotes inside a string, as long as they 
match the quotes surrounding the string; 
*/ 

/* Template strings:
Templates were introduced with ES6(JS 2016)

Templates are strings enclosed in backticks('This is a
template string').

Templates allow single and double quotes inside a string:
*/

text = `He's Often called Jhonny`;
// console.log(text);

/String length - to find the length of a string /

let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(char.length); //length is a property not a function 

/Escape Character/
/*Because strings must be written within quotes, javascript 
will misunderstand this string */

//the backlash escape character(\) turns special characters into string character 

text = "We are the so-called \"vikings\" from the north.";
console.log(text);

/*
\b backspace
\f form feed 
\n new line 
\r carriage return 
\t horizontal tabulator 
\v vertical tabulator 
*/ 

console.log("Welcome To JavaScript\nLet's Get Started");
console.log("Welcome To JavaScript\tLet's Get Started");
console.log("Welcome To JavaScript\fLet's Get Started")

//There is another way to present string with any datatype together forming an string 

let name = "Jhon";
let greet = "Welcome To JS: " + name ;// instead of doing this 
console.log(greet)

greet = `Welcome To Javascript ${name}`; //template string  `${datatype}` -> for string and anyother datattype to join without + operator 
console.log(greet);


//Javascript string object 

let x = "Jhon";
let y = new String("Jhon");

if (x === y){
    console.log(true)
}
else{
    console.log(false)
}

//same as Boolean object -> it is not recommended to create an string object literal 

//Interpolation -> ${} in template literal(string)

//Template strings allow varibales in string 

//Template strings provide an easy way to interpolate variables in strings 

let firstname = "Jhon";
let lastname = "Doe";
let age = 21; 
let userInfo = `Name : ${firstname + lastname}, Age: ${age}`;

console.log(userInfo);


//Template strings allow interpolation of expressions in strings 

let price = 10 ;
let VAT = 0.25; 

let total = `Total: ${(price / (1 + VAT) ** 2 )}`;
console.log(total);

let pi = 3.14512413;
console.log(pi.toFixed(2));
