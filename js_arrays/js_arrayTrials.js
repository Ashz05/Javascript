let a = 1; // memory location which is 0x000

a += 1; // points to different memory location which can be eg: 0x002

const b = 1 ; // memory location which is 0x001
// b += 1; 

console.log(a);
console.log(b);

//stack and heap 

const obj = {
    customerName : "Jhon Doe",
    customerAddress : "No 5 Rico Street",
    customerAge : 21
}

const object = obj;


obj.customerName = "Markus Brownly";
console.log(object);
// console.log(obj);
/*Now you can see the customer name is changed in obj(object) but it has also 
affected another object both the customer name are changed, this is called shallow copy.
*/


// obj["customerName"] = "Markus Brownly";

console.log(obj)