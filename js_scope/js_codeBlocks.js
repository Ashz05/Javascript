/*
Curly Braces 

A Code Block or Block statement is a group of statements enclosed within curly braces {} 

code blocks are important for controlling the flow of execution and defining varibales scopes with the JavaScript program.


Code Blocks allow for multiple statements to be treated as a single unit 

Code Blocks and statements 

Code blocks allow for multiple statements to be treated as a single unit 

the Body of a Javascript Function is always enclosed within a code block.
*/

function myFunction(){
    //this is a code block
}

//Code Blocks are essential for if statements:

// if(condition){

// }else{

// }

/* for loop statements and while loop and do while loop statements 

//Defining scope 

/*Variables declared with let and const inside a code block are "Block-scoped" meaning they are only accessible within that specific block .

this helps prevent unintended variable overwrites and promotes
*/

{
    let x = 10 
    console.log(x);
    //x is accessible here
}
//x is not accessible here 

//Standalone blocks 

/* Code Blocks can alos exist independently without being attached to an if statement, a function or a loop. 
This can be used to create a scope for let and const variables 
*/

{
    let x = 10; 
    let y = 20; 
    const area = x * y;
    console.log(area);
}

//This example above demonstrates how a standalone block can be used to limit the scope of the variable 

//Encapsulation 

/*
Variables inside the block are only available in the block 

This prevents "polluting" the global scope, keeps the code clean 
and reduces the risk of name collisions 

Temporary Use 

if you only need variables for a calculation, a block lets you declare them, use them 
and discard them 

Organized Code
You can group related variables and statements in their own scope to avoid accidental name conflict without forcing them into a function or an object.

This improves readability and avoids accidental re-use of variable names outside the block.
*/
