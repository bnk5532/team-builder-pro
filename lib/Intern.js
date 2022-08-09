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

module.exports = Intern;