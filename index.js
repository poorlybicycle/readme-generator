// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
var fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter project title',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Why did you create this project?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How to install',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions for use here',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which one of these licenses did you use?',
    choices: ['MIT','Apache','Unlicense','None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can other users contribute to your project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter tests and how to run them here',
  },
  {
    type: 'input',
    name: 'question',
    message: 'Provide a way for others to contact you with questions',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (error) {
    if (error) {
      console.log('Could not create file.')
    } else {
      console.log('File successfully created.')
    }
  })
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(
      questions
    )
    .then((answers) => {
      console.log(answers)

      let markdown = generateMarkdown(answers)
      console.log(markdown)
      writeToFile('README.md', markdown)
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });

}

// Function call to initialize app
init();

