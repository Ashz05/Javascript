
/*
Javascript Objects : 
--------------------
Objects are variables that can store both values and functions 
objects are one of the most important concepts in javascript 
if you understand object, you understand javascript */

/*
Object Properties :
------------------- 
Javascript objects are collections of properties. 
Properties can be changes, added and deleted. 
*/

/*
Object Methods: 
---------------
Methods are actions that can be perfomed on objects
Methods are functions stores as property values.
*/

/*
Object this: 
------------
In Javascript, the this keyword refers to an Object 
It is used to access the object that is calling a method. 
*/ 

/*
Object Display:
--------------- 
Displaying properties by name 
Displaying properties in a loop 
Using Object.values()
using JSON.stringify();
/* 

//in real life, we can describe subject as objects (a car, a person, a house)

/*
A Different cars have the same properties but the property values can differ from the car to car. 
Different cars have the same methods, but the methods can be perfomed at different times.
*/

//Object example:

const car = {
    type : "Fiat",
    model : "500",
    color : "White",
    carDrive : function() {
        return `"${this.type} - ${this.model} is Started and is Moving!"`;
    }
};

/*
type, model, color are properties 
"Fiat", "500" and "White" are property values 
carDrive is the Method 
*/


//we can access the attributes by the object name 
console.log(car.carDrive());

/*
Object Literal : 
An Object literal "literally" describes an object using a conscise syntax
 with zero or more key:value pairs inside curly braces to describe all the object properties */

const persona = {
    firstName : "Jhon", 
    lastName : "Doe",
    age : 50,
    eyeColor : "Blue",

    userDetails : function() {
        return `FullName : ${this.firstName + " " + this.lastName},\nAge : ${this.age},\nEyeColor : ${this.eyeColor}`;
    }
};
persona.eyeColor = "Brown";
console.log(persona.eyeColor);
console.log(persona.userDetails());


//You can also create an empty object, and add the properties later:
//Example: 

const person = {};

person.firstName = "Jhon";
person.lastName = "Doe",
person.age = 50;
person.eyeColor = "Blue";

//Note : Should declare object with const keyword

// const person = new Object({
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
// })

//There is no need to use new Object() 
//For readability, simplicity and speed, use an object literal instead.

//you can access object properties in two ways

/* Dot Notation 
   Bracket Notation 
*/

const bike = {
    company : undefined,
    model : undefined,
    power : undefined,
    torque : undefined,
    cubicCapacity : undefined
}

bike["company"] = "Triumph" //Bracket Notation 
bike["model"] =  "Street Triple 795";
bike.power = 125; // Dot Notation 
bike.torque = 110; 
bike.cubicCapacity = 790.00;
console.log(bike);


//In Javascript, Objects are King.

//All Javascript values, except primitives, are objects. 

/*
A Primitive data type is data type that can only be store a 
single primitive value.


Type	  | Example value
-------------------------
string	  | "Hello"
number	  | 3.14
boolean	  | true
bigint	  | 12345678901234n
null	  | null
undefined |	undefined
symbol	  | symbol
*/  
