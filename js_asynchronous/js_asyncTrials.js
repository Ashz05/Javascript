//Creation of promises 


let value = Math.floor(Math.random() * 2)
const promise = new Promise(function(resolve,reject){
    const success = value; 

    if(success){
        resolve("Operation Successful!");
    }
    else{
        reject("Operation Failed!");
    }
});

promise.then(function(value){
    console.log(value);
})

.catch(function(value){
    console.log(value);
})

.finally(function(value){
    console.log("Finished Executing the Promise!");
})

