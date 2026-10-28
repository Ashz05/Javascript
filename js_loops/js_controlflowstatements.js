//Control flow statements 

/* The Break statement "Jumps out" of the loops and 
switches.
the Break statement terminates the execution of a loop or 
switch statement --> Break is much needed in switch statement which break the case flow or else it will executes every cases 
*/

// for(let i = 1; i <= 10; i ++){
//     if(i === 6){
//         console.log("Limit Reached!");
//         break;
//     }
//     console.log("The Number is: ", i);
//     console.log("This number is incremented by ", i);
// }

let age = 18; 

switch(true){
    case (age >= 18):
        console.log("Eligible to vote");
        break;
    case (age <= 18):
        console.log("Not Eligible to Vote");
        break;
    default:
        console.log("Enter a Valid input!");

}

// continue is used to skip and pass to the next value 

// for(let i = 1 ; i <= 10; i++){
//     if(i === 5){
//         continue; //it skipped the(current iteration) number 5 and presented all the values
//     }
//     console.log(i);
// }


loop1: for(let j = 1; j <= 10 ; j++){
    loop2: for(let k = 1; k <= 10; k++){
        if(k === 5){
            continue loop1;
        }
        console.log(k)
    }
}