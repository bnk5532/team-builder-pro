const inquirer = require("inquirer");
const fs = require("fs");
// const generateMarkdown = require("./utils/generateMarkdown");

//questions
inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Employee name?",
    },
    {
        type: "input",
        message: "Employee ID?",
        name: "EEID",
    },
    {
        type: "input",
        message: "Email?",
        name: "Email",
    },
    {
        type: "list",
        message: "Job title?",
        name: "Role",
        choices: ["Engineer", "Intern", "Manager", "Other",],
    },
    {
        //manager only
        type: "input",
        message: "Office number?",
        name: "Office #",
    }
])
//writes or overwrites inquirer answers to new readme file. 
// .then((answers) => {
//        fs.writeFile('README.md', generateMarkdown(answers), err => 
//        err ? console.log(err) : console.log("Success!"));
// });