
//Function Expression

//A Function Expression is a function stored in a variable 

//STANDARD FUNCTION 
function multiply(a,b){
    return a * b ;
}

//FUNCTION EXPRESSION   
const addResult = function addAll(...args){
    let addnum = 0; 
    for(let i = 0; i < args.length ; i++){
        addnum += args[i];
    }
    return addnum;
}
console.log(addResult(1,2,3,4,5));


//Anonymous function 

/* Function expressions are commonly used to create anonymous functions, 
the function above is actually a function without a name;
*/

let z = function add(a,b){return a + b;}
console.log(z(4,5));

//function stored in variables do not need names 

const add = function(a,b){return a + b;}
console.log(add(5,5));


/* Because Function expression is stored in a variable, it can be used like a value. 
this is useful when passing functions to other functions(callbacks).

A function expressions can be assigned to a variable, passed as an 
arguments to another function, or returned from a function
*/

function run(fn){
    return fn;
}

const sayHello = function(){
    return "Welcome to JS";
}

console.log(run(sayHello()));