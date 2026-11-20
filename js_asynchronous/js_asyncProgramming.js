/*
The word async means not at the same time. 

instead of waiting for one task to finish before starting the next, Javascript can 
continue running other code while waiting for an operation to complete 

when the operation finishes, javascript continues by running code that handle the result. 
*/


/* Control Flow
it is the order in which  statements ar executed in a program.
by default, Javascript runs code from top to bottom and left to right.

Example code
*/

function myDisplayer(entity){
    console.log(entity);
}

function myFirst(){
    myDisplayer("Hello");
}

function mySecond(){
    myDisplayer("GoodBye!");
}
myFirst(); //prints first 
mySecond(); //prints second 

//this is how the execution flow goes.

/* 
Blocking Code: 
--------------
A Long - running task block Javascript 

While Javascript is busy, it cannot respond to button clicks, keyboard inputs, or other events. 
*/ 

function wait(){
    let i = 2e9; 
    while(--i > 0);
}


wait() //Blocks the code and below code waits until this code block executes
myDisplayer("Done!");

//Why Async?

/*
some operations takes time to complete:

---> downloading data
---> reading files 
---> waiting for events 
---> waiting for user input
---> waiting for a timer

Asynchronous code runs later:
*/
