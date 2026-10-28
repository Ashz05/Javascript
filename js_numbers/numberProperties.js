//Number Properties 

/*Number.EPSILON is the difference between the smalles floating point number 
greater than 1 and 1 

*/

let x = Number.EPSILON;
console.log(x);

// Number.MAX_VALUE is a constant representing the largest possible number in javascript

x = Number.MAX_VALUE;
console.log(x);

//Number Properties cannot be used on Variables 

/* Number properties belong to javascript number object 
These properties can only be accessed as Number.MAX_VALUE. 
using x.MAX_VALUE , where x is a variable or a value, will return undefined: 

*/ 

x = 6 ; 
let z = x.MAX_VALUE; //Property can only be access by Number.
console.log(z);

/* Number.MIN_VALUE is a constant representing the lowest possible number in Javascript
*/

x = Number.MIN_VALUE;
console.log(x);

//MIN AND MAX SAFE INTEGERS

//Represent the minimum sage integer in Javascript 

x = Number.MIN_SAFE_INTEGER;
console.log(x);

x = Number.MAX_SAFE_INTEGER;
console.log(x);

//Infinity and -Infinity;

x = Number.POSITIVE_INFINITY;
console.log(x);

x = Number.NEGATIVE_INFINITY;
console.log(x);