//Arrow function allows a shorted syntax for function expression 

const multiply = (a,b) => a * b;

console.log(multiply(4,5))

//An arrow function uses symbol =>

const MaxValue = (...args) => {
    let maxval =  args.length - 1; 
    for(let i = 0; i <= args.length ; i++){
        if(args.at(i) > args.at(maxval)){
            maxval = i; 
        }
    }
    return args.at(maxval);
}

console.log(MaxValue(1,2,3,4,5));
//shorted syntax :
/*
If the function body contains only one statement:
you can remove the word function, the curly brackets and the return keyword */

const hello = () => "Hello World!"; // this works if the function has only one statement 

console.log(hello())

//if you have parameters, you pass them inside the parenthesis; 

const greetUser = (name) => "Hello "+ name;
console.log(greetUser("Rico"));


const myFunction = (x,y) => x * y; // you can only omit the return keyword and the curly bracekets if the function is a single statement. 
//if there are more than single statement then the result will be undefined with curly braces 
console.log(myFunction(5,10)); // this will return undefined 

//Arrow function are always expressions and must be assigned to a variable 

// they cannot be used before they are defined

// hello() // throws error
const getName = (name) => { 
    if(name == ""){
        return "No Name Given";
    }
    let result = "Hello "+ name ?? "No Name"; 
    return result;
}
console.log(getName(""))

//arrow functions must be defined before they are used

//Arrow function and the "this" keyword 

//Arrow function do not have their own this value 
//They inherit from the surrounding code 

const persona = {
    name : "Jhon",
    greet : () => "Welcome " + this.name //undefined 
}

const person = {
    name : "Jhon",
    greet : function greetUser(){
        return "Welcome " + this.name;
    }
}

console.log(persona.greet());
console.log(person.greet());

//using arrow functions as a method often gives unexpected results; 

