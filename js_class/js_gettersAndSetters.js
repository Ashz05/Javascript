class Employee{
    constructor(e_id,e_name,e_designation,e_experience){
        this.e_id = e_id; 
        this.e_name = e_name; 
        this.e_designation = e_designation;
        this.e_experience = e_experience;
        console.log("Employee has been registered successfully!");
    }

    getEmployeeDetails(){
        return {
            "Employee ID" : this.e_id,
            "Employee Name" : this.e_name,
            "Employee Role" : this.e_designation,
            "Employee Experience" : this.e_experience
        }
    }

    getExperienceRole(){
        if(this.e_experience >= 4){
            this.e_designation = "Senior " + this.e_designation;
            return `Updated Role(Based on Experience) for the ${this.e_name}` 
        }
    }

}
let employee1 = new Employee(10102, "Jhon Kendy", "Software Developer", 4);

employee1.e_name = "Markus brownly";
employee1.getExperienceRole();
console.log(employee1.e_name);

console.log(employee1.getEmployeeDetails());
