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

eng = new Engineer("alex", 1, "a@aol.com", "Alex07")
console.log(eng.getRole())
// getGithub()
// getRole() //overridden as Engineer
