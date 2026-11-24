/*
Create a Set 

Passing an array to new set()
create an empty set and use add() to add values 


The new Set() Method 
pass an array to the new set() constructor; 
*/

const letter = new Set(['a','b','c']);

letter.add('d');
letter.add('e');
letter.add('f');
letter.add('f') //if you add elements , only the first will be saved!; doesn't allow duplicates

//listing the elements 
// letter.forEach(function(value){
//     console.log(value);
// })

let text = "";
for(const x of letter){
    console.log(x); 
}

console.log(text)
// console.log(letter);

//Sets are Objects 
console.log(typeof letter);  // Gives Object type 
console.log(letter instanceof Set) // Gives True for set and True for Object 


const number = new Array();
number.push(1);
number.push(2);
number.push(3);
console.log(number[0]); // (array)can be accessed by index values;
console.log(letter[0]); // (set)can't access by index values, gives undefined;

