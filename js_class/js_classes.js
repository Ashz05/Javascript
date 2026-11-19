/*
Classes create objects through the new operators 
Each objects have some properties (data or method) added by the class. 
The Class Stores some properties (data or method) itself, which are usually used to interact with instances. 

These correspond to the three key features of classes:

-> Constructor 
-> Instance methods and instance fields 
-> Static methods and static fields 
*/


//Small Example of class:
const bigDay = new Date().getDate();
console.log(bigDay.toLocaleString());

//The new operators creates an object of an clas, here Date() is an class (need new to initaite an object) and getDate() is an method. 



//Declaring Class 

class Car{
    //constructor method: it is special method.
    /*
    it has to have the exact name "constructor"
    it is executed automatically when an new object is created 
    it used to initialize object properties
    */
   
    constructor(name,model,hp,year){ //constructor : it like an default field inititalization where it is called whenever an object is created 
        this.name = name; 
        this.model = model;
        this.hp = hp;  
        this.year = year ;
        console.log("Constructor is created!");
    }
    //Methods are like function where it can only be accessed under an class (which comes as class properties.
    //An Class can have Many Methods (n number of methods). 
    getCarDetails(){ // Method: Differs as per the class, methods are like specialization that an class can do; like example Car is a class and it as method to drive 
        console.log(`Car Details Of: ${car1.name}`);
        return `Car Model: ${this.model}, Car HorsePower: ${this.hp}, Car Year: ${this.year}`;
    }

    age(){
        const date = new Date(); 
        return {
            "Car" : this.name,
            "Car Year of Service": date.getFullYear() - this.year
        };

    // static getStarted(){ //static method are method which belongs to the class instead of an particular object!
    //     return "Car is Started!";
    //     }
    }
}

//if the arugments are not filled as the constructor's parameter then there will be undefined in an variable value; 
let car1 = new Car("Ford","Mustang",213,2000); //here when we create an instance of an class, constructor is called by default 
//now you can see the "Constructor is created!" is being printed!""
console.log(car1); //This produces object of car1

//if we want to access an object method (we need to use dot notation!);
console.log(car1.getCarDetails());
// console.log(car1.getStarted()); // this throws an TypeError has it is an static method, you need to invoke the method by the {class name} not by {object name};
// console.log(Car.getStarted());


console.log(car1.age());