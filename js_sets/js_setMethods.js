//The new Set Method

//new is used to create an object based on the object type 

const setValues = new Set();

console.log(typeof setValues)
console.log(setValues instanceof Set)
console.log(setValues instanceof Object)
console.log(setValues);


// add() method used to add elements in set object 
setValues.add('a');
setValues.add('b');
setValues.add('c');
// for(let i = 1; i <= 5; i++){
//     setValues.add();
// }

//foreach() method is used to iterate over the element in an object; 
// setValues.forEach(function(value){
//     console.log(value);
// });

// for(let element of setValues){
//     console.log(element);
// } another method to print values 

console.log(setValues);

//has() method, it is used to check whether the element is present in the current set object 

console.log(setValues.has(1)); //present inside the object
console.log(setValues.has(0)); //not present inside the object 


//values() methods returns an iterator object with values in a set; 

const myIteratorValues = setValues.values();

for(const elements of myIteratorValues){
    console.log(elements);
}


//keys() method returns an Iterator Object with the values in a Set;
const myIteratorKeys = setValues.keys();

for(const elements of myIteratorKeys){
    console.log(elements);
}

//entries() method returns an Iterator with [value,value] pairs from a Set.
const myEntries = setValues.entries();

for(const entry of myEntries){
    console.log(entry);
}

