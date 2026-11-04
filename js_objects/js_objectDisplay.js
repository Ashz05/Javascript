const person = {
    name : "Jhon",
    age : 30, 
    city : "New York"
};

let text = person; 
console.log(text);
console.log(typeof(text));

//Displaying Object Properties 
//The Properties of an object can be added in a string 

text = person.name + " " + person.age + " " + person.city;
console.log(text);

//using for loop 

for(let x in person){
    console.log(person[x]) + " "
};

//using object.values()

const myArray = Object.values(person);

console.log(myArray.toString());


//Object entries() 

const fruits = {Bananas : 300, Oranges: 200, Apples:500}

for (let [fruit,value] of Object.entries(fruits)){
    console.log(value);
} 

for (let [key,value] of Object.entries(person)){
    console.log(value);
}