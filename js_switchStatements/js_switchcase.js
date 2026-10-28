//Switch Control flow 

/* Based on a condition, switch selects one or 
more code blocks to be executed. 

switch executes the code blocks that matches an expression 

switch is often used as more readable alternative to many 
if...else...if.else statement, especially dealing with 
multiple values */


let day = new Date().getDay();

switch(day){
    case 1:
        day = "Monday"; console.log(day);
        break;
    case 2:
        day = "Tuesday"; console.log(day);
        break; 
    case 3:
        day = "Wednesday"; console.log(day);
        break; 
    case 4:
        day = "Thursday"; console.log(day);
        break; 
    case 5:
        day = "Friday"; console.log(day)
        break; 
    case 6:
        day = "Saturday"; console.log(day);
        break;
    case 0:
        day = "Sunday" ; console.log(day);
}

let age = 15;

//here in switch there is boolean value 
//When you write switch(15), JavaScript locks onto the number 15 as its target value.
//There for it will check each case and fail to execute the case output 
switch(true){
    case (age >= 18):
        console.log("Eligible to Vote");
        break;
    
    case (age < 18):
        console.log("Not Eligible to Vote!");
        break;
    
    default:
        console.log("Enter a valid Input:!");
}