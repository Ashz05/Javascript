/*A Label provides a name for a statemenet, or a 
block of statements allowing statements to be referenced to, 
for program flow control, particularly in loops.
*/

//A Label  is an indentifier 

loop1 : for(let i = 1 ; i <= 5; i++){
    loop2 : for(let j = 1; j <= 5; j++){
        if(i === 3){
            break loop2;
        }
        console.log(j);
    }
}