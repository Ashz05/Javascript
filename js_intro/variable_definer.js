
//The Let Keyword was introduced in ES6 (2015)
// Var declared with let have block scope


//Eg for let usecase 

if (true){
    let variable = "I am trapped inside";// let only allows variables to be accessed within the block of code
    const year = 2027; // const only allows variables to be accessed within the block of code 
    //now let consider var 
    var month = "Feburary";
    console.log(variable);
    console.log(year);
    console.log(month);
}
// console.log(variable);
// console.log(year);
//but var lets you to access the variable thorught the program.
//it ignores boundry and leaks outside.  
console.log(month);