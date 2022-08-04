const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }
    getRole(){
     let parentRole = super.getRole()

        return parentRole + ":" + "Intern"
    
    }
    getSchool(){
        return this.school
       
    }
}

intern = new Intern("Brian", 580335, "bn5332@gmail.com", "UNCW")
console.log(intern)
console.log(intern.getRole())