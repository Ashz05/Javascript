//Without await keyword!
async function hello(){
    return "Hello World!";
}

function syncWait(){
    let i = 2e9; 
    for(;i > 0;){
        i--;
    }
    console.log("Sync Wait is Executed!");
}

async function asyncWait(){
    let j = 2e9; 
    for(;j > 0;)
    {
        j--; 
    }
    return "Async Wait is Executed!";
}

setTimeout(function(){
    console.log("Executed!")
},1000);

function greet(){
    console.log("Welcome to JavaScript!");
}

hello().then(function(value){ //asychronous function 
    let i = 2e9;
    while(--i > 0);
    console.log(value);
})

asyncWait().then(function(value){ //this is an asynchronous function this will executed (if there is wait time) then other function will start its execution, 
    console.log(value)
})
syncWait(); //this is an synchronous function thus greet() will execute only after the wait() function is executed!
greet();
