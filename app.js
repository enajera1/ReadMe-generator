// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./page-template.js');

// TODO: Create an array of questions for user input

const promptProject = () => {
  console.log(`
  ==============
  Add a New Project
  ==============
  `);
    return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the project title? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your project name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter a description of your project. (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your project description!');
          return false;
        }
      }
    },
    {
      type:'input',
      name:'link',
      message:'Enter the GitHub link to your project. (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a link to your Project!');
          return false;
        }
      }
    },
    {
      type:'input',
      name:'installation',
      message:'Enter instructions for installation (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter instructions so developers know how to use your awesome product');
          return false;
        }
      }
    },
    {
      type:'input',
      name:'usage',
      message:'Enter the usage of your project'
    },
    {
      type:'list',
      name:'license',
      message:'Licensed by?',
      choices: ['BSD', 'MIT', 'GPL', 'N/A']
    },
    {
      type:'input',
      name:'contributing',
      message:`Are you open to contributions to your code? 
      
      If yes, please tell us how to access docs on how to get started.
      
      If no, just skip`,
    },
    {
      type:'input',
      name:'tests',
      message:'Test?'
    },
    {
      type:'input',
      name:'questions',
      message:'Enter your GitHub account username for contact reference for any questions anyone may have.'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter a contact email.'
    }
  ]);
};


promptProject()
  .then(projectData => {
    const pageReadMe = generatePage(projectData);
    

    fs.writeFile('READMe.md', pageReadMe, err => {
      if (err) throw err;

    //   console.log('Portfolio complete! Check out README.md to see the output!');
// });
  });
});