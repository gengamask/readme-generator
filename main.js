const iq = require('inquirer'); // calling downloaded npm, inquirer
const fs = require('fs'); // calling the file system.

// array of the questions to ask for the user input.
const qus = [
            {
                type: 'input',
                message: 'What is your github Username?',
                name: 'username',
                validate: function (answer){
                    if (answer.length < 1) {
                    return console.log("A valid name of the repo is required.");
                }
                return true;
                }
            },
            {
                type: 'input',
                message: 'What is the name of your repository?',
                name: 'repo',
                validate: function (answer){
                    if (answer.length < 1) {
                    return console.log("A valid name of the repo is required.");
                }
                return true;
                }
            },

]
