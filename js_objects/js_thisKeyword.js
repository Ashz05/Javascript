//This in Objects 

//This keyword refers to an object 

//Javascript, this is used to access the object that is calling a method 

//This is an object method 

//When used inside an object method, this refers to the object.

const person = {
    firstName : "Jhon",
    lastName : "Doe",
    age : 50,
    getFullName : function(){
        return this.firstName + " " + this.lastName 
    }
}
console.log(person.getFullName());

//This keyword makes it possible to use the same method with different objects 


const person1 = {
    Name : "Jhon",
    hello : function() {
        return "Hello " + this.name; 
    }
};

const person2 = { 
    name : "Anna",
    hello : function(){
        return "Hello " + this.name; 
    }
}

console.log(person1.hello());
console.log(person2.hello());


//This alone 

let x = this; // refers to global object 
console.log(x);
console.log(typeof(x));