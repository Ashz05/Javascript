//Ternary operator 

//The conditional operator is a shorthand for writing 
// conditional if...else statements. 

//Eg: (condition) ? expression1 : expression2 
//ES1 Feature (1997)
let age = 12 ; 
let result = (age >= 18) ? "Can Watch the Movie" : "Can't Watch the Movie!";

//just like Nullish coalescing operator (??)
let name;
let defaultValue = "Missing Value/Field";
let resultValue = name ?? defaultValue;
console.log(resultValue);
