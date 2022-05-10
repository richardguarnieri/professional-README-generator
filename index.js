const inquirer = require('inquirer');
const fs = require('fs');
const generateREADME = require('./readmeGenerator')

const basicLength = 1;
const projectLength = 1;

const githubLicenses = [
    'None',
    'Apache License 2.0',
    'GNU General Public License v3.0',
    'MIT License',
    'BSD 2-Clause "Simplified" License',
    'BSD 3-Clause "New" or "Revised" License',
    'Boost Software License 1.0',
    'Creative Commons Zero v1.0 Universal',
    'Eclipse Public License 2.0',
    'GNU Affero General Public License v3.0',
    'GNU General Public License v2.0',
    'GNU Lesser General Public License v2.1',
    'Mozilla Public License 2.0',
    'The Unlicense',
]

inquirer.prompt([
    // Basic User Questions
    {type: 'input', name: 'githubUserName', message: '1) What is your GitHub username? (required):', validate(input){
        if (!input || input.length < basicLength) {console.log('\n Please enter a GitHub username!')} else {return true}
    }},
    {type: 'input', name: 'githubRepoName', message: '2) What is your GitHub repository name? (required):', validate(input){
        if (!input || input.length < basicLength) {console.log('\n Please enter a GitHub repository name!')} else {return true}
    }},
    {type: 'input', name: 'userName', message: '3) What is your name? (full name) (required):', validate(input){
        if (!input || input.length < basicLength) {console.log('\n Please enter your full name!')} else {return true}
    }},
    {type: 'input', name: 'userEmail', message: '4) What is your email address? (required):', validate(input){
        if (!input || input.length < basicLength) {console.log('\n Please enter your email address!')} else {return true}
    }},
    {type: 'input', name: 'linkedinUserName', message: '5) What is your LinkedIn username?:'},
    {type: 'input', name: 'twitterUserName', message: '6) What is your Twitter username?:'},
    {type: 'input', name: 'projectTitle', message: '7) What is your project title? (required):', validate(input){
        if (!input || input.length < basicLength) {console.log('\n Please enter the project title!')} else {return true}
    }},
    {type: 'input', name: 'projectSubTitle', message: '8) Please write a brief (no more than 60 characters) project subtitle (required):', validate(input){
        if (!input || input.length < basicLength || input.length > 60) {console.log('\n Please enter a brief subtitle for your project!')} else {return true}
    }},
    {type: 'input', name: 'projectLogo', message: '9) Please write the relative path of your project image/logo (e.g. ./img/logo.png) (required - if skipped, it will automatically choose the following default message in gray):',
    default: './img/logo.png', validate(input){
        if (!input || input.length < basicLength) {console.log('\n Please enter the relative path of your project image/logo!')} else {return true}
    }},
    {type: 'input', name: 'applicationImg', message: '10) Please write the relative path of the application image (e.g. ./img/app-image.png) (required - if skipped, it will automatically choose the following default message in gray):',
    default: './img/logo.png', validate(input){
        if (!input || input.length < basicLength) {console.log('\n Please enter the relative path of your application image!')} else {return true}
    }},
    {type: 'input', name: 'applicationUrl', message: '11) Please write the application URL (e.g. https://example.com/) (required):', validate(input){
        if (!input || input.length < basicLength) {console.log('\n Please enter the application URL')} else {return true}
    }},
    // Project Based Questions
    {type: 'input', name: 'projectDescription', message: '12) Provide a short description explaining the what, why, and how of your project (required):', validate(input){
        if (!input || input.length < projectLength) {console.log('\n Please enter the short description!')} else {return true}
    }},
    {type: 'input', name: 'installationInstructions', message: '13) What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running (required):', validate(input){
        if (!input || input.length < projectLength) {console.log('\n Please enter the installation steps!')} else {return true}
    }},
    {type: 'input', name: 'usageInformation', message: '14) Provide instructions and examples for use (required):', validate(input){
        if (!input || input.length < projectLength) {console.log('\n Please enter the usage information!')} else {return true}
    }},
    {type: 'input', name: 'contributionGuidelines', 
    message: '15) Please provide instructions on how other developers can contribute to the project (if skipped, it will automatically choose the following default message in gray):',
    default: `
Contributions are much welcomed! If you have suggestions to make this application better, please fork the repo and create a pull request.

You can also open an issue [here][github-issues-url] and tag it with the **"enhancement"** label.`
    },
    {type: 'input', name: 'testInstructions', message: '16) Go the extra mile and write tests for your application. Then provide examples on how to run them here (required):', validate(input){
        if (!input || input.length < projectLength) {console.log('\n Please enter the tests instructions!')} else {return true}
    }},
    {type: 'list', name: 'projectLicense', message: '17) Please choose a license for your application (required):', choices: githubLicenses}
// a readme.md generator for your multiple and sweet projects!
]).then(answers => {
    console.log(answers)
    const readme = generateREADME(answers)
    console.log(readme)
    fs.writeFile('README_generated.md', readme, error => {
        error ? console.log(error) : console.log('README_generated.md sucessfully created!')
    })
})