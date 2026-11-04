
function person(firstName, lastName, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age; 
    this.address = address;
}


const person1 = person("Alex", "Mercer", 24, "NYY 31s street");
console.log(person1);