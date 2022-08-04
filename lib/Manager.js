const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email)
        this.office = office
        
    }
    getRole(){
     let parentRole = super.getRole()

        return parentRole + ":" + "Manager"
    
    }
    getOffice(){
        return this.office
    }
}

manager = new Manager("Morgan", 123456, "morgan@test.com", "2A")
console.log(manager)
console.log(manager.getRole())
getRole() //overridden as manager.