/* In Programming, you will need a data type 
that can represent one of two values, like 

yes or no 
on or off 
true or false 

Boolean values are fundamental for logical operations and 
control flow in javascript programming 

Comparisons 

All javascript comparison operators(like ==, !=, <, >)
return true or false from the comparison 

*/ 

let x = 5 
console.log(x == 5);
console.log(x > 5);
console.log(x != 5)
console.log(x != 8);


// Eg 1

let time = new Date().getHours();
console.log(time);

if(time < 12){
    console.log("Good Morning!");
}
else if(time >= 12){
    console.log("Good Afternoon!");
}
else if(time >= 16){
    console.log("Good Evening!");
}
else if(time >= 18 && time <= 20){
    console.log("Good Evening!");
}
else{
    console.log("Good Night!");
}

//Most use case you can see in For and while loop 
//In While loop 

let i = 1; 
while(i <= 10){
    console.log(i);
    i++;
}

//for for-loop 

let j = 11;
for(;j <= 20;){
    console.log(j);
    j++;
}

//Boolean function 
/*You can use the Boolean() function to find out if an 
expression (or a variable) is true:
*/ 

let a = 5; 
let b = 3;
console.log(Boolean(a >= 5));
console.log(Boolean(a <= 5));

//Normally Javascript Booleans are primitive values created from 
// literals 

let c = false ; 

//Booleans can also be defined as object with keyword 

c = new Boolean(false);
console.log(`C Value: ${c}`);

//But creation of Boolean object is not recommended 
//The new keyword complicates the code and slows down the execution speed. 
//also Boolean object can produce unexpected results.


//Why because 
//Boolean object cannot be safely compares:

// x = Boolean(false);
// y = Boolean(false);
// console.log(x === y) //--> This gives true but instead if create an object of Boolean 

x = new Boolean(true);
y = new Boolean(true);
console.log(x === y)