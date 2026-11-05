/*
Function Definitions vs Function Declarations
-----------------------------------------------
Function definition is a general term for defining a function.

Function declaration is one specific way to define a function.

Examples of function definitions include:

Function declarations
Function expressions
Arrow functions
*/

function myFunction1(x,y){
    return x * y; 
}

const myFunction2 = function name(x,y){
    return x * y;
}

const myFunction3 = function(x,y){
    return x * y
}

const myFunction4 = (x,y) => x * y; 


const myFunction5 = new Function("x", "y", "return x * y");

console.log(myFunction5(4,2));

const obj = {
    myFunction6(x,y){
        return x * y;
    },
};

console.log(obj.myFunction6(4,5));


const x = function(a,b) {return a * b};
console.log(x(4,5));