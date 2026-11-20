/*
I Will Call Back Later 

A Callback is function passed as an argument to another function 
the receiving function decides when to use(call) the callback.
A callback can be called immediately, leter, once or many times. 
By Themselves, callbacks are neither synchronous nor asynchronous.*/ 

function greet(string, callback){ //function calling another function 
    return string + " " + callback;
}
function getName(name){
    return name; 
}
console.log(greet("Hello", getName("Jhon")));


//the above code is sync callbacks; 

/*
Most callbacks execute immediately. 
These are called synchronous callbacks because they run before the current function returns. 
*/ 

let result; 

setTimeout(function() {
        result = 5; 
    }, 1000
);

console.log(result) //here it gives undefined as the result is printed first coz setTimeout is an async function, if it delays it works with other code directly and execute the settimeout function when it finishes 


async function wait(){
    setTimeout(function() {
        let i = 2e9; 
        while(--i > 0);
        console.log("wait function finished executing!");
    })
    
}

async function printer(entity){
    console.log(entity);
}

wait()
printer("welcome to Javascript");
