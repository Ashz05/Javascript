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