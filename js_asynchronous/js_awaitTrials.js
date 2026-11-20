//Without await;
function greet(){
    console.log("Welcome to Javascript!");
}

function waitSync(){
    let i = 2e9; 
    for(;i > 0;){
        i--;
    }
    console.log("Wait Sync is Executed!");
}

async function waitAsync(){
    let i = 2e9; 
    for(;i > 0;){
        i--;
    }
    // throw Error("Error in Async!");
    return "Wait Async is Executed!";

}

waitAsync().then(function(value){
    console.log(value);
})
.catch(function(error){
    console.log(error);
})
.finally(function(value){
    console.log("Compeleted Execution!")
})

waitSync();
greet();
