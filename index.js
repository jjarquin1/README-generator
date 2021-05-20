// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const { CreateFileError } = require('external-editor')
const generateMarkdown = require('./generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            message: 'Enter project name',
            name: 'title',
            validate: (value)=>{if(value){return true} else {return 'please enter something dude'}}
        },
        {
            type: 'input',
            message: 'Enter project description',
            name: 'description',
            validate: (value)=>{if(value){return true} else {return 'please enter something dude'}}
        },
        {
            type: 'input',
            message: 'Enter intstall instructions',
            name: 'installation',
            validate: (value)=>{if(value){return true} else {return 'please enter something dude'}}
        },
        {
            type: 'input',
            message: 'Enter how to use this project',
            name: 'usage',
            validate: (value)=>{if(value){return true} else {return 'please enter something dude'}}
        },
        {
            type: 'list',
            message: 'project license',
            name: 'license',
            choices: ['MIT','Apache','ISC', 'None'],
            validate: (value)=>{if(value){return true} else {return 'please enter something dude'}}
        },
        {
            type: 'input',
            message: 'Enter any contributions',
            name: 'contributions',
            validate: (value)=>{if(value){return true} else {return 'please enter something dude'}}
        },
        {
            type: 'input',
            message: 'Enter how to test your project',
            name: 'tests',
            validate: (value)=>{if(value){return true} else {return 'please enter something dude'}}
        },
        {
            type: 'input',
            message: 'Contact for questions',
            name: 'questions',
            validate: (value)=>{if(value){return true} else {return 'please enter something dude'}}
        },
        {
            type: 'input',
            message: 'Enter your Github link',
            name: 'github',
            validate: (value)=>{if(value){return true} else {return 'please enter something dude'}}
        },
        {
            type: 'input',
            message: 'Enter your e-mail adress',
            name: 'email',
            validate: (value)=>{if(value){return true} else {return 'please enter something dude'}}
        }
    ]

     

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName,data,(err)=>{
        if(err){
            console.log(err)
        }else {
            console.log("good job dude")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile("README.md",generateMarkdown(data)); 
        console.log
    })
 }

// Function call to initialize app
init();
