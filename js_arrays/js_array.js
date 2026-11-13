/*
An Array is an object type desinged for storing data collections 

characteristics of JS arrays are: 

Elements: An Array is a list of values, known as elements. 

Ordered: Array elements are ordered based on their index. 

Zero indexed: The first element is at index 0, the second at index 1 and so on 

Dynamic size: Arrays can grow or shrink as elements are added or removed

Heterogeneous: Arrays can store elements of different data types(numbers, strings, objects, and other arrays).

*/


/*If you have a list of items (a list of car names, for example), 
storing the names in single variables could look like this:
*/

let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW"

/*
However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?

The solution is an array!

An array can hold many values under a single name, and you can access the values by referring to an index number.
*/


//Creating an Array 

//Using array literal 

const arrayCars = ["BMW","Mercedes","Porsche"]

//it is a common practise to declare arrays with const keyword 

const obj = {title: "Welcome to reddit"};

obj.title = "Welcome to youtube"; // object properties and value can be changed 
//but when you try to redeclare the entier object then it throws an error for the const keyword.

// obj = {title : "Welcome to Javascript"}; //TypeError: Assignment to constant variable.\
console.log(obj);
//lets change it to let 

let obj1 = {title: "Welcome to reddit"};
obj1 = {Compound : "Welcome"} // let will let the non-primitive datatype like obj, arrays , etc.. which can be declared again which changes the memory location from the stack memory 
console.log(obj1);

//Accessing array elements 

console.log(arrayCars[0]);
//Array indexes starts with 0 

// [0] is the first element. [1] is the second element. 

//Changing an array element

arrayCars[0] = "Opel";
console.log(arrayCars)

//Converting arrays to string 
console.log(arrayCars.toString());


//Displaying array 
console.log(arrayCars);

//Displaying an Array using JSON 
console.log(JSON.stringify(arrayCars));

//Array Element can be Objects
const myfunc = function(...args){
    let evenNum = [] 
    for(let i = 0; i <= args.length ; i++){
        if(args[i] % 2 === 0){
            evenNum.push(args[i]);
        }
    }
    return evenNum
}

let myArray = [1,2,myfunc(1,2,3,4,5)];
console.log(myArray[2]);

//Arrays Properties and Methods 

//The Real Strength of Javascript arrays are built-in array properties and methods. 


console.log(myArray.length);
console.log(myArray.sort());

//Length property 

//The Length property of an array returns the length of an array 

const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.length);
for(let fruit in fruits){
    console.log(fruits[fruit].length)
}


//Accessing the first Array Element, middle element and last Array Element 

console.log(fruits)
console.log(fruits[0]); // first element 
let middleElement = Math.ceil((fruits.length - 1) / 2);
console.log(middleElement)
console.log(fruits[middleElement]);
console.log(fruits[fruits.length - 1]) // last element
console.log("")
// //Looping array element; 

// for(let fruit in fruits){
//     console.log(fruits[fruit])
// }


//Array.foreach()
fruits.forEach(function(i){
    console.log(i);
})

//Add Element in Array 

fruits.push("Lemon","Pineapple");
console.log(fruits);
console.log(fruits.length);

//adding element with high indexes can created undefined 

fruits[10] = "Watermelon";
console.log(fruits);
fruits.push("Coco","Tocko");
console.log(fruits);


//Assiciative arrays

//Many programming languages support named index, but js does not support named index
 
const person1 = [] 
person1[0] = "Jhon";
person1[1] = "Doe";
person1[2] = 46;

const person2 = [] ; 
person2["firstName"] = "Jhon";
person2["lastName"] = "Doe";
person2["age"] = 54;
console.log(person2);

//This become an list of object 
//after that some array bethod produce incorrect result 
console.log(person2.length); // results 0 

//How to Recognize an Array 

//A common question is: How do i know if a variable is an array? 

//The problem is that the javascript operator typeof returns object 

console.log(typeof(fruits)); //it should be array

//Solution 1: 
//To solve this problem ECMAScript 5 (JS 2009) defined a new method 

console.log(Array.isArray(fruits));

//Solution 2:
console.log(fruits instanceof Object);

//Nested Arrays and Objects 

const myObj = {
    name : "Jhon",
    age : 30, 
    cars : [
        {
            name : "Ford",
            models : ["Feista", "Focus", "Mustang"]

        },
        {
            name : "BMW",
            models : ["320", "X3", "X5"]
        },
        {
            name : "Fiat",
            models : ["500","Panda"]
        }
    ]
}

console.log(JSON.stringify(myObj));