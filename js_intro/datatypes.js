//Datatypes - There are totally 8 datatypes as of now in javascript. 

//String - A text character enclosed in single or double quotes
//eg 
let fname = "Jhon ";
let lname = "Doe";
let fullname = fname + lname ;
console.log(typeof(fullname));


//Number - A Number is a mathematical representation of a value
function addition(a,b){
    let result = a + b;  // Number is an integer (positive to negative )
    return result; 
}
let addedValues = addition(5,4);
console.log(typeof(addedValues));

//Bigint - A number represent a larger integer(number)
let bignumber = BigInt(112321414135141412214);
console.log(typeof(bignumber));


//Boolean - acts like a flag counter representing true or false
is_online = true; 
if(is_online){
    console.log("User is Online!");
}
else{
    console.log("User is Offline!");
}

//Object - A Collection of key-value pair of data 

const person = {firstName : "Jhon" , lastname : "doe"};
console.log(person.firstName,person.lastname);
const date = new Date().getFullYear();
console.log(date);


//Undefined - A Primitive variable with no assigned value 

let x; 
console.log(x)


//Null - A Prmitive value representing object absence 
x = null; 
console.log(x);

//Symbol - A Unique and primitive identifier

let sym = Symbol();
console.log(sym)