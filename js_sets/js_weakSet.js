/*
The WeakSet Object 

A JavaScript WeakSet is a Collection of Values where the values must be Object 

A WeakSet Holds weak references to its values.
*/


let mySet = new WeakSet();

let myObj = {fname : "Jhon", lname : "Doe"};

mySet.add(myObj);
mySet.delete(myObj);
console.log(mySet);

let answer = mySet.has(myObj);
console.log(answer);

/*
Garbage Collection

JavaScript employs a memory management mechanism known as Garbage Collection.

The primary functions are:

    Ensuring efficient use of memory resources
    Reclaim memory occupied by variables that are no longer in use
    Preventing memory leaks
*/

/*
Weak References:

Unlike a regular set, a weakSet does not prevent its values from being garbase collected. 

if a value (an object) has no references in a program, it becomes eligible for garbase collection. 
when the value is grabage collected, it is removed from the WeakSet.*/

//Values must be object - Primitive values cannot be values in weakSet. 

/*
The values must be object 

this restriction is tied to garbage collection mechanism;
primitives are not garbage collected in the same way as object */



let weakObjectSet = new WeakSet();

const myObject = {fname : "Rico", lname : "Doe"};

// weakObjectSet.add(1); //can't add primitve values like a Set;

weakObjectSet.add(myObject);

weakObjectSet = null;

console.log(weakObjectSet)//provides WeakSet(object) {<items unknown>}



//Tracking objects 

/*
A WeakSet is similar to Set, but it only stores objects, and holds them weakly. if there are no other references to an object, 
it gets garabase collected automatically; 
*/


const persons = new WeakSet();

const Jhon = {name: "Jhon", age : 40};
let Paul = {name : "Paul", age : 41};
const Ringo = {name : "Ringo", age : 39};

function track(person){
    if(persons.has(person)){
        return person.name + " is Visiting Again";
    }
    else{
        persons.add(person)
        return("Name:  " + person.name + " age: " + person.age + ", is visiting for the first time");

    }
}


let visitors = track(Jhon);
visitors = track(Jhon);
visitors = track(Paul);
visitors = track(Paul);
Paul = null;
console.log(visitors);
console.log(visitors);