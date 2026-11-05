
/*
#Scope = visibility 

//Scope determines the accessibility(visibility) of variables.

Javascript variables have 3 types of scope 

Global scope
Function scope 
Block scope 

*/ 

/*Global scope 
---------------
Variables declared Globally(outside any block or function) have Global scope. 


Global variables can be accessed from anywhere in a javascript program. 

variables declared with var, let and const are quite similar 
when declared outside a block. 

they all have global scope: 
*/

var x = 1;
let y = 2;
const z = 3 ; 


// let carName = "Volvo";

function myFunction(){
    x = 1; // global scope accessing 
    console.log(x);
    y = 2 ;
    console.log(y);
}

//Global variables has global scope 

/* All scripts and functions in the same web page can access a 
variables with global scope 
*/

//Function scope 

/*
All Javascript functions have their own scope 

variables defined inside a function are not accessible(visisble)
from outside the function. 
*/

//code here can NOT use canName 
function myFunction1(){
    var carName = "Volvo"; //function scope
    //code here CAN use carName
}

function myFunction2(){
    let carName = "Volvo"; //function scope
    //code here CAN use carName

}

function myFunction3(){
    const carName = "Volvo";// function scope 
    //code here CAN use carName

}


/*local variables have function scope 

they can only be accessed from within the function 
No Scripts or functions outside the function can access them
variables with the same name can be used outside the function 
variables with the same name can be used in different functions
local variables ar ecreated when a function starts 
local variables are deleted when the function is completed
argumnets (parameter) work as local variables inside the functions


##Block Scope 
Before ES6 , Javascript variables colud only habe global scope or function scope 

ES6 introduced two important new javascript keyword let and const 

these two keywords provide block scope in javascript 

variables declared with let and const inside a code block are block-scope, meaning 
they are only accessible within that block scope 

this helps prevent unintended variable overwrites and promotes better code organization 

*/

{
    let value = 2;
}
// console.log(value); can NOT be used here 

/*variables declared with the var keyword can not have block 

variables declared with the var keyword inside a {} block, can be 
accessed from outside the block
*/ 

{
    var valueX = 5;
}
console.log(valueX); // CAN be used here

//Automatically global 

/*
if you assign a value to variable that has not been declared, it will become a global variable 

this code example will declared a global variable carName, even if 
the value is assigned inside a function.
*/
displayCarName()
console.log(carName)
function displayCarName(){
    carName = "Volvo";
}

//Global variables in HTML 

/* with JavaScript, the Global scope is the JavaScript environment 
in HTML, the global scope is the window object 

global variables defined with the var keyword belong to the window object:
*/

