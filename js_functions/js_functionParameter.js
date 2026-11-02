//Javascript function parameter 

function multiply(a,b){
    let result = a * b; 
    return "Multiplication Value: ", result;
}

let returnResult = multiply(1,2); //refers to function result, here it is return an value but we need to display it 
console.log(returnResult);

//Parameters vs Arguments 

/*Paramter and argumetns are distinct concepts

Parameters are the names listed in the function definition 

Argumetns are the real values passed to, and recieved by the function. 

*/

//Parameter Rules: 

/*
Javascript Function definitions do not specify data types for parameters 

JavaScript functions do no perform type checking on the arguments 

JavaScript functions do not check the number of arguments recieved. 
*/


//Default parameter values

function myFunction(x,y=10){ //default value is used if no argument is provided.
    return x + y;
}

console.log(myFunction(5));

