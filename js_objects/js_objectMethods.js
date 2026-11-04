//Object Methods

//Methods are actions that can be performed on an object 

//Methods are functions stores as a property values.

const person = {
    firstName : "Jhon",
    lastName : "Doe",
    age : 50, 
    fullName : function() {
        return `FullName: ${this.firstName } ${this.lastName}`;
    }
}

console.log(person.fullName())

//This keyword, in an object method, this refers to the object itself


const employee ={
    employeeName : "Marston",
    employeeID : 12314,
    employeeRole : "Software Developer",
    employeeExperience : 4,
    isLoggedIn : true,
    getId : function(){
        return "ID: " + this.employeeID;
    }
}

console.log(employee.getId());


//adding method to an object 

employee.getEmployeeDetails = function(){
    return {
        "ID" : this.employeeID,
        "Name" : this.employeeName,
        "Role" : this.employeeRole,
        "Experience" : this.employeeExperience,
        "LoggedIn" : true
        
    }
}

console.log(employee.getEmployeeDetails());
name = "Hello"
const student1 = {
    studentID : 1, 
    studentName : "Marston",
    studentAge : 15, 
    studentAddress : "4th Clover street",
    getStudentDetails : function(){
        return {
            "Name" : this.studentName,
            "Age" : this.studentAge,
            "Address" : this.studentAddress
        }
    }
}
console.log(student1.getStudentDetails());


//Methods are function stored as object properties 
