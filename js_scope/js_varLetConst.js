// var | let | const 

//variable declared with var are hoisted but initialized with undefined 

//using a let or const variable before it is decalred will result in a Reference Error

//Scope rules

/*
var is function-scoped:
If you declare a var variable inside a loop or an if block, it "leaks out" and is accessible anywhere outside the block.

let and const are block-scoped:
They are confined strictly to the nearest pair of curly braces {} (such as loops, functions, or conditional blocks).
*/

if(true){
    var firstName = "Jhon";
    let lastName = "Doe";

}
let text1 = "unknown";
let text2 = "unknown";

if(typeof(firstName) !== "undefined") text1 = firstName;
if(typeof(lastName) !== "undefined") text2 = lastName;
console.log(text1);
console.log(text2);

//Reassignment vs Redeclaration

/*
var allows you to accidentally re-declare the exact same variable name in the same scope, silently overwriting earlier values.

let can be updated/reassigned, but it throws an error if you attempt to re-declare it within the same scope.

const is strictly read-only. It requires an initial value immediately upon declaration and cannot be reassigned later.


Best Practiceses 

Always use const by default.
It prevents accidental reassignments and makes your code more predictable.

Only use let when:
You know its value needs to change later (inside a loop or a mathematical counter).

Never use var.
Its unpredictable scoping and the redeclaration rules are known to cause bugs.

*/

