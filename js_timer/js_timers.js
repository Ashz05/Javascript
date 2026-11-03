//Javascript Timers 

//Run a function after a Delay 

//Javascript timers let you run a function after a delay or repeatedly at fixed intervals 

//The two main timer functions are setTimeOut() and SetInterval() 


//SetTimeout() --> Runs a function once after a delay 

function Displayer(entity){
    console.log(entity);
}

const greetUser = () => {
    Displayer("Hello");
}

setTimeout(greetUser, 2000)

//Timers do not pause javascript 

//Calling setTimeout() does not pause JavaScript 
//JavaScript Immediately continues with the next statement 

Displayer("Start");
setTimeout( function(){ 
    console.log("Welcome to Javascript")
}, 0)
Displayer("End!");

/* A Delay of zero milliseconds does not mean that the callback function will run automatically 
it means that the callback will run as soon as the current Javascript task has finished. 
*/ 


setTimeout(() => {
    Displayer("Timer is Finished");
}, 0);

//the timer delay is 0 seconds still the callback cannot run until the loop has finished 

let i = 0;
while(i++ <= 100);
/* Timer do not interrupt running Javascript, 
A long running function can delay timer callbacks and make the 
page unresponsive. 

clearTimeout() => function returns a timer identifier 
pass the identifier to clearTimeout() to cancel the timer 
*/


function showTime(){
    const date = new Date();
    Displayer(date.toLocaleTimeString());
}
setInterval(showTime,1000);



