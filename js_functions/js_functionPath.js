//Functions

/* Function are code Blocks 

Functions are reusable code blocks designed to perform a particular task 
functions are executed when they are called or invoked 
functions are fundamental in all programmung languages

Uses of Function:
    -Reuse code(write once, run many times)
    -Organize code into smalled parts 
    -Make code easier to read and maintain 
*/

function greet(){ console.log("Welcome to JavaScript!")}; // A one Liner 

//More common

function sayHello(){ //function_name (parameter) { body of the function } 
    return "Hello World!";
}

greet(); // Function call 
console.log(sayHello());
console.log(greet) // function (object)
//() this means execute now 


/*
Function are defined with the function keyword 
        -Followed by the function name 
        -Followed by parentheses ()
        -Followed by brackets {}
*/

function multiply(a,b){
    return a * b; 
}

console.log(multiply()); // if we dont give the expected parameter onto the function this raises NaN based on the type of datatype we work witg 

/*
A function definition is not an executable statement,
it is not common to end a function definition with a semicolon

Semicolons are used to separate executable Javascript statements 
*/

function add(a,b){
    let result = a + b 
    return result; 
};

let sum1 = add(5,5);
let sum2 = add(50,50);

console.log(sum1);
console.log(sum2);

//Function are called first class citizen in programming language 
// entity which can be assigend to a variable, return from a function, be stored in data structures are called as first class citizen 

//Local Variable 

// code here can NOT use carName
function myFunction(){
    let carName = "Volvo";
    //code here can use carName 
}

//code here can NOT use carName; 

//Functions used as variables; 
//Local variable are created when the function starts and deleted when function is completed. 

let x = add(5, 5);
let y = "Addition of of 2 Numbers is :" + x; 
console.log(y)
// you can also use the function directly, as a variable valueL:


//Function enable better code organization and efficiency
//The Same code, With different input, can produce different results


function greetUser(name){
    return "Hello " + name;
}

console.log(greetUser("Riya"));

//Function Input and Output; 
//Parameters - The Names listes in function definition 
//Arguments - The Values sent to the funtion whne it is called 
//Function Code - The Work done inside the function 
//Return Output - The value returned from the function 


/* 
Next Chapter 

Function ar executed when they are called or invoked 
you call a function by adding parentheses to its name like: name() 
*/