//Arrow function allows a shorted syntax for function expression 

const multiply = (a,b) => a * b;

console.log(multiply(4,5))

//An arrow function uses symbol =>

const findMax = (...args) => {
    let maxValue = args.length - 1 ;
    for(let i = 0; i < args.length; i++){
        if(args[maxValue] < args[i]){
            maxValue = i;
        }
    }
    return args[maxValue]
}

console.log(findMax(10,200,101,300,350,340,50));

//shorted syntax :
/*
If the function body contains only one statement:
you can remove the word function, the curly brackets and the return keyword;