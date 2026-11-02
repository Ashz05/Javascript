//In Javascript, function parameter and arguments are distinct couple 

//parameters are the names listed in the function definiton.

//Arguments are the real values passed to, and recieved by the function. 



function division(a,b){
    if (b == 0){
        return new Error("Divisor can't be Zero (Infinity or -Infinity");
    }
    else{
        let divideResult = a / b; 
        return divideResult
    }
}

let result = division(5,1);
console.log(result);


function findMax(array = []){
    let max = array.length - 1;
    for(let i = 0; i < array.length ; i++){
        if(array[max] <= array[i]){
            max = i;
        }
    }
    return array[max];
}

let maxResult = findMax([1,10,100,20,30,40,1000,90,99,101]);
console.log(maxResult);

function sumAll(array = []){
    if(array == []){
        return "Array can't be Empty!";
    }
    else{
        let summation = 0; 
        for(let i = 0; i < array.length ; i++){
            summation += array[i];
        }
        return summation;
    }
}

console.log(sumAll([1,2,3,4,5]));


//Argument Rules 

//Javascript function definitions do not specify data types for arguments 
//Javascript functions do not perform type checking on the passed arguments 
//Javascript functions do not check the number of arguments recieved


//Missing arguments

//if a function is called with fewer arguments than parameters, the missing value becomes undefined 

function multiply(a,b){
    return a * b;
}

console.log(multiply(4)); //NaN


function findMin(array = []){
    if(array == []){
        return "Array can't be Empty!";
    }
    else{
        let min = 0; 
        for(let i = 0; i <= array.length ; i++){
            if(array[min] > array[i]){
                min = i;
            }
        }
        return array[min];
    }

}

console.log(findMin([1,2,3,4,5,0,-1]))

//Default parameters:
/* If a function is called with missing arguments(less than declared),
the missing values are set to undefined.
sometimes this is acceptable, but sometimes it is better to assign a default value to parameter. 

*/

function myFunction(x,y){
    if(y == undefined){
        y = 2;
    }
}

console.log(myFunction(2,4));

//Function rest parameter 

function restOperator(...args){
    for(let i = 0; i <= args.length ; i++){
        console.log(args[i]);
    }
}

restOperator(1,2,3,41,12,124,1423,3123,4,124,31214);

