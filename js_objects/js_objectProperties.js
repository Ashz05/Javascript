/*
A JavaScript object is a collection of properties 
Properties can be added, changed and deleted
*/


//Adding properties; 

const person = {} 
person.name = "Jhon";
person.age = 25;

console.log(person);

//Changing Properties
person.name = "Jhon Ricko";
console.log(person);

//Deleting properties
delete person.name;

/*
delete keyword deletes both the value and the property.
After deleting, the property is removed, Accessing it will return undefined
*/
console.log(person);


//Check if property exists

const personCheckProperty = {
    checkName : "name" in person,
    checkAge : "age" in person 
}

console.log(personCheckProperty);

//Nested Objects

//Property values in an object can be other object 

const persona = { 
    name : "Jhon",
    age : 45,
    myCars : {
        car1 : "BMW",
        car2 : "Ford",
        car3 : "Audi"
    },
    address : "4th Clover Riston Street "
}

console.log(persona);

//accessing nested objects
console.log(persona.myCars.car1);//only Dot notation
console.log(persona["myCars"]["car2"]);//only bracket notation
console.log(persona["myCars"].car3); //Both Dot and Bracket notation  