const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }
    getRole(){
     let parentRole = super.getRole()

        return parentRole + ":" + "Engineer"
    
    }

}

module.exports = Engineer;