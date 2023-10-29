// DONE: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// DONE: Create an array of questions for user input
const questions = [
  { name: 'title', message: 'Project title: ' },
  { name: 'description', message: 'Description: ' },
  { name: 'installation', message: 'Installation instructions: ' },
  { name: 'usage', message: 'Usage information: ' },
  { name: 'contribution', message: 'Contribution guidelines: ' },
  { name: 'instructions', message: 'Instructions: ' },
  { name: 'tests', message: 'Tests: ' },
  {
    name: 'license',
    type: 'list',
    message: 'License: ',
    choices: [
      {
        name: 'MIT License',
        value: 'mit'
      }, {
        name: 'Apache License 2.0',
        value: 'apache'
      }, {
        name: 'GNU General Public License v3.0',
        value: 'gpl3'
      }
    ],
  },
  { name: 'gitHub', message: 'GitHub username' },
  { name: 'email', message: 'Email address' },
];

// DONE: Create a function to write README file
function writeToFile(fileName, data) {
  const text = generateMarkdown(data);


  fs.writeFile(fileName, text , function(error) {
    if (error) {
      throw error;
    }

    console.log('\nSaved ' + fileName + '\n');
  });
}

// DONE: Create a function to initialize app
function init() {
inquirer
  .prompt(questions)
  .then((answers) => {
    writeToFile('Generated-README.md', answers);
  })
  .catch((error) => {
    console.log(error);
  });
}

// Function call to initialize app
init();
