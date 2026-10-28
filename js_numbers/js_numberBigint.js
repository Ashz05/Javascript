//BigInt is a JavaScript data type for handling and storing big integer values 

/* 
BigInt allows you to work with integers larger than the limit of numbers

Bigint can represent an integer of any size, limited only by available memory. 

*/


let x = 999999999999999; //Accuracy up to 15 digits 
console.log(x)

let y = 9999999999999999;
console.log(y); //16 digits changes the accuracy 

//Number are 64-bits floating point 

//ALL Javascript Number are stored in 64-bit floating point

let a = Number.MAX_SAFE_INTEGER;
console.log(a);
let b = a + 10; 
console.log(b);


//There are no such thins as Javascript integers, All Javascript number are 64-bit floating point. 


//Using an integer literal with an n suffix 
x = 9999999999999999n;
console.log(x);
console.log(typeof(x)) 

let c = "9999999999999999";
// let convertC = Number(c); Not accurate 
let convertC = BigInt(c);
console.log(convertC);

/* BigInt is the second numeric data type in javascript after numner 

With BigInt the total number of supported data types in JS is 8:
1. String 
2. Number 
3. BigInt 
4. Boolean 
5. Undefined
6. Null
7. Symbol
8. Object 

*/

//Mixing BigInt and Numbers 
//Arithmetic between a BigInt and a Number is not allowed(will result TypeError)

//Explict conversion must be done 

// x = 10n;
// y = 5;

// z = x + y; 
// console.log(z); TypeError

//BigInt decimals 

// A BigInt can not have decimals 

// x = 10.5n; //A BigInt literal must be integer.
// console.log(x);

// x = 5n;
// y = x / 2;
// console.log(y);

x = (10n + 5n);
console.log(x);


y = (10n == 10);
console.log(y);

z = (10n === 10n);
console.log(z);

//Strict equality (===) between a BigInt and a Number will always be false due to different types.
