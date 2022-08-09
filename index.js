const inquirer = require("inquirer");
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const template = require("./lib/template")
const employees = []
// const temporary = [
//     { name: '', id: '', email: 'fdfdfd', office: 'dfd' },
//     { name: 'fdfd', id: 'dfd', email: 'df', github: "fgdfd"}
//   ]
const fs = require("fs");
// const generateMarkdown = require("./utils/generateMarkdown");
// const engineerTemp = temporary.filter((engineer)=>engineer.hasOwnProperty("github")).map((engineer)=>writeEngineer(engineer))
// const internTemp = employees
//     .filter((intern) => intern.hasOwnProperty("school"))
//     .map((intern) => writeIntern(intern));

// console.log(engineerTemp.join(""))
// console.log(internTemp.join(""))

// function writeEngineer({name, id, email, github}) {
//     return `<div>
//     <h1>${name}</h1>
//     <h2>${id}</h2>
//     <h3>${email}</h3>
//     <h4>${github}</h4>
// </div>`

// }
// function writeIntern({name, id, email, school}) {
//     return `<div>
//     <h1>${name}</h1>
//     <h2>${id}</h2>
//     <h3>${email}</h3>
//     <h4>${school}</h4>
// </div>`

// }
//questions

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
            name: "office",
        }
    ]) .then(({name, id, email, office})=> {
        const newManager = new Manager (
            name, 
            id, 
            email, 
            office
        )
        employees.push(newManager)
        console.log(employees)
        roleList()
    })
})()

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

function writeFile(){
    fs.writeFile('team.html', template(employees), err => 
       err ? console.log(err) : console.log("Success!"));
    
}
