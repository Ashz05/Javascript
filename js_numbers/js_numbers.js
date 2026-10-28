//Number Types: 
/* JavaScript has only one type of number 
numbers can be written with or without decimals 
*/

let x = 3.14;
let y = 3; 

x = 123e5;
console.log(x);
y = 123e-5;
console.log(y);

//Javascript Numbers are always 64-bit floating point 

/* Unlike many other programming languages, javascript does not 
define different type of numbers, like integers, short, long,  floating-point, etc... 

javascript numbers are always stored as double precision floating point numbers, following international IEEE 754 standard

this format stores numbers in 64-bits, where the number(the fraction) is stores in bits 0 to 51, 
the exponent in bits 52 to 62 and sign in bit 63
*/ 

//Integer position 

//Integers (numbers without a period or exponent notation) ar accurate up to 15 digits 

x = 999999999999999; // upto 15 digitsl
y = 9999999999999999; //more the 15 digits ;

console.log(x);
console.log(y); // rounds off to 10000000000000000

//Maximum number if decimals is 17

x = 0.2 + 0.1; 
console.log(x);


x = (0.2 * 10 + 0.1 * 10) / 10; 
console.log(x);


/* Javascript uses the + operator for both addition 
and concatenation 

Numbers are added. Strings are concatenated!.
*/

x = 10; 
y = 20; 
let z = x + y;

console.log(z); // addition by numbers

//addition by string and a number 
x = "10";
y = 20;
z = x + y; 
console.log("Type:" , typeof(z),"\nNumber:" ,z); // string concatenation ("1020")


x = "100"
y = "10" 
z = x / y // except + operator in string every other operator converts string number value to integer if we use any arithmetic operator except addition/concatenation operator  
console.log(z);


x = "100";
y = "10";
z = x + y;
console.log(z);

//NaN is a javascript reserved word indicating that a number is not a legal number 

x = 100 / "apple";
// x = 100 / "10"; if it is string(numeric) it converts string to number; 
console.log(x);

//use isNan() to find a value is not a number 
console.log(isNaN(x)); //gives boolean value 


//Infinity (or - Infinity) is the value Javascript will return if you 
//calculate a number outside the largest possible number 

x = 100/0; 
console.log(x);

let myNumber = 2 ; 
while(myNumber != Infinity){
    myNumber = myNumber * myNumber;
    console.log(myNumber)
}

console.log(typeof(Infinity)); // number data type 


//Hexadecimals 

//Javascript interprets numeric constants as hexadecimal if they are preceded by 0x

let hexa = 0xFF;
console.log(hexa);


let number = 32;
console.log(number.toString(32));


// By default, JavaScript displays numbers as base 10 decimals.

// But you can use the toString() method to output numbers from base 2 to base 36.

// Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.


//Javascript Number as Objects 

let a = 123; 
let b = new Number(123);

console.log(a,b);

//Do Not Create number object as the new Keyword complicates code and slow down execution speed.

let doubleEquals = a == b; 
console.log(doubleEquals);

let tripleEquals = a === b;
console.log(tripleEquals); // as you can see the number are same but number is different from object, this creates complication 

