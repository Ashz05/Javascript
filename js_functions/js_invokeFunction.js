//Calling a function 

//A Javascript function runs when it is called 

//To Call a function, write the name followed by the parentheses like name()

/* 
Function Invocation :

The code inside a function is Not executed when the function is defined 

the code inside a function will execute when "something" invokes the function:
    -When it is called from Javascript code
    -When an event occurs(a user clicks a button)
    -Automatically(self invoked)

it is common to use the term invoke, because a function can be invoke without being called

*/

function sayHello(){
    return "Hello World!";
}

sayHello() // it does not use the result 

//To use the returned value, you can store it in a variable or display it. 

//When a function returns a value, you can store the value in a variable 

let greeting = sayHello();
console.log(greeting);


function toCelsius(fahrenheit){
    return (5/9) * (fahrenheit - 32);
}

let value = toCelsius; //refers function itself 
let result = toCelsius(95); //refers to the function result 
console.log(value); 
console.log(typeof(value)) //returns the function object
console.log(result); 
console.log(typeof(result));//returns the return value datatype 

//Example for return value datatype:

function getTodayDate(){let dateobj = new Date(); return dateobj.getDate() + "/" + dateobj.getMonth() + "/" + dateobj.getFullYear();}
let getDate = getTodayDate();
console.log(getDate);

//Function can be called from anywhere 

//You can call functions from other function, from events or from any code block 

//Example 

function greetUser(name){
    let todayDate = getTodayDate();
    console.log(todayDate);
    console.log("Loggend in on: " + todayDate);
    return "Welcome: " + name ; 

}

console.log(greetUser("Mary"));