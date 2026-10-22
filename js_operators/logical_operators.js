//Logical operators are used to determine the logic between 
//variables or values 

let x = 6; 
let y = 3;

console.log(x > 10 && y > 1); // and operators checks for both conditions 
//here the above has 2 conditions x > 10 , and y > 1 
// x > 10 -> false , y > 1 -> true ==> false(0) *(and) true(1) ==> 0

console.log(x > 10 || y > 1);
//here it is an or operator consider it like an addition operator between conditions 
// there are 2 condition and either 1 condition should be passed

console.log(!x > 10 || !y != 10);
//here not operator total changes the condition to reverse 
// here if not is presend before the condition then it reverse it like true to false , false to true 


//Nullish coalescing operator (??)

//The ?? operator return the right operand when the left operand is nullish 

let name = null 
let text = "missing";
let result = name ?? text 

console.log(result);