const inquirer = require("inquirer");
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const template = require("./lib/template")
const employees = []
const fs = require("fs");
//manager first to start inquirer prompts
(function managerPrompt() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Manager name?",
        },
        {
            type: "input",
            message: "Employee ID?",
            name: "id",
        },
        {
            type: "input",
            message: "Email?",
            name: "email",
        },
        {
            //manager only
            type: "input",
            message: "Office number?",
            name: "officeNumber",
        }
    ]) .then(({name, id, email, officeNumber})=> {
        const newManager = new Manager (
            name, 
            id, 
            email, 
            officeNumber
        )
        employees.push(newManager)
        console.log(employees)
        roleList()
    })
})()
//calls after manager prompt and gives selection of different employee roles.
function roleList() 
    {
        inquirer.prompt ([
            {type: "list",
            message: "Job title?",
            name: "role",
            choices: ["Engineer", "Intern", "Done"]}
        ]) .then((choice)=> {
            if (choice.role === "Engineer") return engineerPrompt()
            if (choice.role === "Intern") return internPrompt()
            if (choice.role === "Done") return writeFile()
        })
    }
 
//calls upon selection of engineer in the roleList
function engineerPrompt() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Employee name?",
        },
        {
            type: "input",
            message: "Employee ID?",
            name: "id",
        },
        {
            type: "input",
            message: "Email?",
            name: "email",
        },
        {
             //engineer only
            type: "input",
            message: "GitHub?",
            name: "github",
        }   
    ]) .then(({name, id, email, github})=> {
        const newEngineer = new Engineer (
            name, 
            id, 
            email, 
            github
        )
        employees.push(newEngineer)
        console.log(employees)
        roleList()
    })  
}
//calls upon selection of intern in the roleList
function internPrompt() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Employee name?",
        },
        {
            type: "input",
            message: "Employee ID?",
            name: "id",
        },
        {
            type: "input",
            message: "Email?",
            name: "email",
        },
        {
             //intern only
        type: "input",
        message: "School?",
        name: "school",
        }   
    ]) .then(({name, id, email, school})=> {
        const newIntern = new Intern (
            name, 
            id,
            email,
            school
        )
        employees.push(newIntern)
        console.log(employees)
        roleList()
    })
}
//executes file creation upon selection of done from roleList.
function writeFile(){
    fs.writeFile('team.html', template(employees), err => 
       err ? console.log(err) : console.log("Success!"));
    
}
