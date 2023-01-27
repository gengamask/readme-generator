// TODO: Include packages needed for this application
const iq = require('inquirer');
const fs = require('fs');
const md = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Please enter the name of the project',
        name: 'title',
    }, 
    {
        type: 'input',
        message: "Describe the project of what is for.",
        name: 'description'
    },
    {
        type: 'input',
        message: "Describe the steps to install your project for the Installation section.",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Enter the instructions and examples of your project in use for the Usage section.",
        name: 'usage'
    },
    {
        type: 'list',
        message: 'Choose your license',
        choices: ['GNU AGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License'],
        name: 'license'
    },
    {
        type: 'input',
        message: "Enter guidelines on how other developers can contribute to your project.",
        name: 'contribution'
    },
    {
        type: 'input',
        message: "Enter any tests written for your application and provide examples on how to run them.",
        name: 'tests'
    },
    {
        type: 'input',
        message: 'What is your github Username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log("Name: ", fileName)
    // we need to REATE the NEW README
    let result = md(data)
    console.log("Data: ", result);
    console.log(typeof result);

    fs.writeFile(fileName + ".md", result, function(error) {
        if(error) {
            console.log(error);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    iq.prompt(questions)
    .then((data) => {
        console.log(data);

        // use the dataset from the Inquirer ASYNC prompt() method
        // where do we want the dataset to be consummed(?)

        writeToFile(data.title, data);
    })
}
// Function call to initialize app
init();
