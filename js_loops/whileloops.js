/* While loop loops through a block of code as long as 
specified condition is true */

let i = 1; 
// while(i <= 10){
//     console.log(i);
//     i++;
// }

let text = ""
while(i < 10){
    text = `The Number is: ${i}`;
    console.log(text);
    i++;
}
console.log(text);

/*The do while loop is a variant of the while loop. This loop
will execute the code once, before checking if the condition is true,
then it will repeat the loop as long as the condition is true
*/

i = 1; 
do{
    console.log(i);
    i++;
}
while(i >= 10);

//here you can see that even the while condition is not satisfied 
//it still prints the output  


const cars = ["Volvo","BMW","Saab","Ford"]

let iterator = 0;
do{
    console.log("Brand Name: ", cars[iterator]);
    // console.log(iterator);
    iterator++

}while(iterator < cars.length) 