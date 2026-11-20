/*

I Promise a Result 
A promise represents the future result of an asynchronous operation.
it acts as a placeholder for a value that is not available yet.
when the operation finishes, the promise is either fulfilled with a value or rejected with an error. 

*/

//Creating a Promise


let number = Math.floor(Math.random() * 2);

const myDisplayer = function(entity){
    console.log(entity);
}

const promise = new Promise(function(resolve,reject){
    const success = Boolean(number);

    if(success){
        resolve("Operation is Successful!");
    }
    else{
        reject("Operation Failed!");
    }
});

promise.then(function(value){
    setTimeout(function(){
        myDisplayer(value);
    },1000)
})

.catch(function(value){
    setTimeout(function(){
        myDisplayer(value);
    },1000)
})

.finally(function(value){
    setTimeout(function(){
        myDisplayer("Finished Executing!");
    },1000)
    
})

/*
then() method registers a function that handles a fullfilled promise.
The Registered function receives the fullfillment value.

the catch() method registes a function that handles a rejected promise 

the finally() method registers a function that runs when an promise settles 
it runs whether the promise is fullfilled or rejected!
*/


