
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
// TODO: Include packages needed for this application
const {generateMarkdown, writeToFile} = require('./utils/generateMarkdown');
var inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [    
    {
    type: 'input',
    name: 'title',
    message: 'What Is Your Project Name?',
    validate: projectInput => {
      if (projectInput) {
        return true;
      } else {
        console.log('What Is Your Project Name?');
        return false;
      }
    }
  },{
    type: 'input',
    name: 'Email',
    message: 'Please enter your Email',
    validate: projectInput => {
      if (projectInput) {
        return true;
      } else {
        console.log('Please enter your Email');
        return false;
      }
    }
  },{
    type: 'input',
    name: 'GitHubUsername',
    message: 'Please enter your GitHub username',
    validate: projectInput => {
      if (projectInput) {
        return true;
      } else {
        console.log('Please enter your GitHub username');
        return false;
      }
    }
  },{
    type: 'input',
    name: 'description',
    message: 'Please enter a description',
    validate: projectInput => {
      if (projectInput) {
        return true;
      } else {
        console.log('Please enter a description');
        return false;
      }
    }
  },{
    type: 'input',
    name: 'installationInstructions',
    message: 'Please enter installation instructions',
    validate: projectInput => {
      if (projectInput) {
        return true;
      } else {
        console.log('Please enter installation instructions');
        return false;
      }
    }
  },{
    type: 'input',
    name: 'usageInformation',
    message: 'Please enter usage information',
    validate: projectInput => {
      if (projectInput) {
        return true;
      } else {
        console.log('Please enter usage information');
        return false;
      }
    }
  },{
    type: 'input',
    name: 'contributionGuidelines',
    message: 'Please enter contribution guidelines',
    validate: projectInput => {
      if (projectInput) {
        return true;
      } else {
        console.log('Please enter contribution guidelines');
        return false;
      }
    }
  },{
    type: 'input',
    name: 'testInstructions',
    message: 'Please enter test instructions',
    validate: projectInput => {
      if (projectInput) {
        return true;
      } else {
        console.log('Please enter test instructions');
        return false;
      }
    }
  },{
    type: 'list',
    name: 'license',
    message: 'choose a license',
    choices: ['', 'MIT', 'GPL', 'BSD 2-Clause License']
  }];

// TODO: Create a function to write README file


// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);

}


// Function call to initialize app
init()
    .then(portfolioData => {
        console.log(portfolioData.license);   
        // writeToFile('README.md', portfolioData); 
        data = generateMarkdown(portfolioData)
        writeToFile('./Generated/README.md', data);
    })
    
    module.exports = writeToFile;