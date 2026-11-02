//Returning values from functions 

//A Function can return a value back to the code that called it. 

//The return statement is used to send a value out of a function. 

//When a function reaches a return statement, the function stops executing 
//the value after the return keyword is sent back to the called 


/* When a function reaches a return statement, the function stops 
executing 
the value after the return keyword is sent back to the caller 
*/

function sayHello(){
    return "Hello World!";
}

let message = sayHello(); 
//Variable message now contains "Hello World!"

function multiply(a,b){
    return a * b;
}

let total = multiply(2,3) * 10; 
console.log(total);

//function can return any type of value(not only numbers)

function exampleFunc(a,b){
    return "Done";
    return a * b; 

}
///code written after a return statement not to be execute".


//if a function does not return a value, the return value will be undefined 

function differentNumbeR(age){
    if(age < 18){
    //     return "too Young!"
            console.log("Welcome back!");
    
    // return "Access Granded";
    console.log("Go Back");
    }
}console.log(differentNumber);


//Function Parameters and arguments are distincit concepts 
// parameter are the names listed in the function definition 
// Arguments are tje values