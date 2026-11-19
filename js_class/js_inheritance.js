/*
Class Inheritance 

To Create a class inheritance, use the extends keyword.
A Class created with a class inheritance inherits all the methods from another class:
*/


class Cars{
    constructor(carname){
        this.carname = carname; 
    }
    displayCar(){
        return `Car Name: ${this.carname}`;
    }
}

class CarModels extends Cars{
    constructor(carname,model,year){
        super(carname);
        this.model = model;
        this.year = year; 
    }

    showCarDetails(){
        return `${this.displayCar()}, Model: ${this.model}, Year: ${this.year}`;
    }
}

/*The Super() method refers to the parent class
by Calling the super() method in the constructor method we call the parent's constructor method and get access 
to the parent's properties and methods 
*/

// Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.


//Getters and Setters 

/*
classes also allow you to use getters and setters 

it can be smart to use getters and setter properties, especially if you want to do something special with the value before returing them, or before you set them. 

to add getters and setters in the class, use the get and set keywords.
*/


class Student{
    constructor(s_id,s_name,s_class,s_group){
        this.s_id = s_id; 
        this.s_name = s_name; 
        this.s_class = s_class; 
        this.s_group = s_group; 
        console.log("Student Record is Created Successfully!");
    }

    get studentName(){
        return `Student Name is: ${this.s_name}`;
    }

    get studentClass(){
        return `Student Class is: ${this.s_class}`;
    }

    get studentGroup(){
        return `Student Group is: ${this.s_group}`;
    }

    set studentName(s_name){
        this.s_name = s_name;
        return "Student name has been changed Successfully!";
    }

    set studentClass(s_class){
        this.s_class = s_class;
        return "Student class has been changed Successfully!";
    }

    set studentGroup(s_group){
        this.s_group = s_group;
        return "Student Group has been changed Successfully!";
    }

    getStudentDetails(){
        return `id: ${this.s_id},Name: ${this.s_name}, Class: ${this.s_class}, Group: ${this.s_group}`;
    }
}
let car1 = new Cars("Ford");
let model1 = new CarModels("Ferrari","Frido",2023);

let student1 = new Student("10021","Jhon",10,"Computer Science");
// console.log(student1.getStudentClass())
console.log(student1.studentName);
console.log(student1)
student1.studentName = "Markus"
console.log(student1.getStudentDetails())
console.log(model1.showCarDetails());