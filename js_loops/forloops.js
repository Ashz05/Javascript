//for loop used to traverse an object or do a certain action in an loop instead of doing again and again 

//eg 

for(let i = 0 ; i <= 4 ; i++){
    console.log("Welcome to Javascript!"); // prime example for loop 
}

//instead of printing welcome to javascript 5 times we use loop to make this task easier 

//counter program; 
let counter = 1
for(let i = 0; i < 10; i++){
    //changes the value for every interation in the loop by incrementing the counter value 
    console.log(counter);
    counter++;
}

//for loop statement creates loop with 3 optinal expressions 
/* for (expr1; expr2; expr3)
    {
    // Code block to be executed
    } 

exp1 is executed one time before the execution of the code
exp2 defines the condition for executing the code block 
exp3 is executed everytime the code block has been executed 


*/

//Loop scope 

let i = 5 ;
for(i = 0; i <= 10; ){
    console.log(i); 
    i++
}

console.log(i);
