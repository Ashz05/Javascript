//Javascript Hoisting 

//Hoisiting is Javascript default behaviour of moving declaration to the top 

//Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

/*The let and const keyword

Variables defined with let and const are hoisted to the top of the block, but not initialized.

Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.

Using a let variable before it is declared will result in a ReferenceError.

The variable is in a "temporal dead zone" from the start of the block until it is declared.
*/

// carName = "Volvo";
// let carName;

// let carName; 
// console.log(carName)