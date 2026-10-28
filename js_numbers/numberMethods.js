//ToString() method returns a number as a string 

//All number methods can be used on any type of number(literals ,variables, or expression);

let x = 123;
console.log(x.toString());
console.log((123).toString());
console.log((100 + 23).toString());

//toString() method can take optional radis argument to convert the number to a different base 

x = 123; 
let text = x.toString(2);
console.log(text);

//toExponential() Method - returns a string with a number rounded and written using exponential notation 

let y = 4;
let z = 5;


let exponent = z.toExponential(y);
console.log(exponent);

//What happens under the hood in exponential() 

// class Numeric{
//     constructor(num){
//         this.num = num; 
//     }
//     toExponential(y){
//         for(let i = 1 ; i <= y ; i++){
//             this.num **= i;
//         }
//         return Math.round(this.num);
//     }
// }

// let num = new Numeric(z);
// let result = num.toExponential(y);
// console.log(result);

//toFixed() method - returns a string with number written with a specified number of decimals 

x = 9.656;
console.log(x.toFixed(2));

//toPrecision() method - returuns a string, with a number written with a specified length 

x = 9.548; 
console.log(x.toPrecision(2));

//valueOf() method 

x = 123; 
console.log(x.valueOf());

let num = new Number(123)
console.log(num.toPrecision());


//The Number() Method - can be used to convert Javascript variables to numbers

console.log(Number(true));console.log(Number(false));

let a = 5.4123;
console.log(Number(a))
a = "1231 123 123 "
console.log(Number(a))
a = "23.12";
console.log(Number(a))
a = " 12 2 ";
console.log(Number(a))

console.log(Number(new Date("1970-01-01")));

//ParseInt() parses a string and returns a whole number. Spaces are allowed. 

//parses a string and returns a number. Spaces are allowed. Only the first number is returned. 

//if the number cannot be converted, Nan is returned

console.log(parseInt("10023"));
console.log(parseInt("10023"));
console.log(parseInt("10 20 30"));
console.log(parseInt("10 years"));
console.log(parseInt("years 10"));

let vari = "10" ; 
console.log(Number.parseInt(vari));


x = 2.7; 
z = x.toFixed(2);
console.log(z);