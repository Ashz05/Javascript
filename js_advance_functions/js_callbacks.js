//Javascript callbacks 
//I will call back later!

/*

A Javascript callback is a function passed as an argument 
to another function, which is then executed(or "called back") at a
later point in time to complete a specific task. 

this mechanism is fundametal to javascript's event-driven and asynchronous programming model.
*/


/* Callback function 
A callback function is a function passed as an argument into another function 

a callback function is intended to be executed later 

later is typically when a specific event occurs or an asynchronous operations completes 
*/ 

//Asunchronous operations 
setTimeout(getName, 3000);

function getName(){
    return "Hello";
}

const time = function(){
    let i = 1; 
    while(i < 100){
        i++;
    }
    return i 
}
console.log(time())

function EvenNumber(...args){
    let evenList = [] 
    for(let num in args){
        if(num %2 == 0 ){
            evenList.push(Number(num));
        }
    }
    return evenList;
}

let nums = EvenNumber(1,2,3,4,5,6,7,8,9,10);
function PowerNum(nums){
    let poweredNums = [] 
    for(let num in nums){
        poweredNums.push(nums[num] ** nums[num]);
    }
    return poweredNums

}
console.log(nums)
// console.log(PowerNum(nums))
