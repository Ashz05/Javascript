// function myfunc(){
//     let x = 10; 
//     function myfoo(){
//         let y = 10; 
//         x += 10;
//         console.log("Addition of 2 Numbers is:");
//         return x + y;
//     }
//     return myfoo;
// }

// let val = myfunc();
// console.log(val());

let counter = 0; 

function incrementCounter(){
    counter += 1 ;
}
incrementCounter();
incrementCounter();
console.log(counter);

/*
Warning !
There is a problem with the solution above: Any code on the page can change the counter, without calling add().

The counter should be local to the add() function, to prevent other code from changing it:
*/

counter += 10;
console.log(counter); //still we can change the counter value to prevent this we have closuers

function incrementCounter(){
    let counter = 0; 
    function increase(){
        counter += 1; 
        console.log(counter);
    }
    return increase;
}

let count = incrementCounter();

count();
count();

