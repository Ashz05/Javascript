"use strict";

/*
The "use strict" directive

the "use strict" directive was new in ECMAScript version 5. 

it defined that javascript code should be executed in strict mode 

It is not a statement. It is a literal expression, ignored by earlier versions of JavaScript.

*/

myCar()
console.log(carName)

function myCar(){
    carName = "Audi R8";
}

/* 
The "use strict" 
the syntax, for declaring strict mode, was designed to be compatible with older version of javascript 

compiling a numeric literal(4 + 5;) or a string literal("Jhon Doe";) in Javascript 
program has no side effects. it simply compiles to a non existing variable and dies
*/

//Not Allowed in Strict Mode

// using a variable without declaring it, is now allowed 

x = 3.14; 

//Objects are variables too 
//Using an object, without declaring it, it is not allowed; 

// "use strict";
x = {p1 : 10, p2 : 20};

//Deleting a variable(or object) is now allowed; 

// "use strict";
let x = 3.14; 
// delete x;

//duplicating a parameter name is not allowed

function xP(p1,p1){}

