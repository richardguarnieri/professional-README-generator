const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = () => {
    ``
}


inquirer.prompt([
    {type: 'input', name: 'githubUserName', message: 'What is your GitHub username?'},
    //, validate(text){
    //     if (text.length < 3) {
    //         console.log('\npls fix')
    //     } else { 
    //         return true 
    //     }
    // }},
    {type: 'input', name: 'githubRepoName', message: 'What is your GitHub repository name?'},
    {type: 'input', name: 'userName', message: 'What is your name? (full name)'},
    {type: 'input', name: 'userEmail', message: 'What is your email address?'},
    {type: 'input', name: 'linkedinUserName', message: 'What is your LinkedIn username?'},
    {type: 'input', name: 'twitterUserName', message: 'What is your Twitter username?'},
    {type: 'input', name: 'projectTitle', message: 'What is your project title?'},
    {type: 'input', name: 'projectDescription', message: 'Please write a brief 5-8 words project description.'},
    {type: 'input', name: 'projectLogo', message: 'Please write the relative path of your project image/logo (e.g. ./img/logo.png)'},
    {type: 'input', name: 'applicationImg', message: 'Please write the relative path of the application image (e.g. ./img/app-image.png)'},
    {type: 'input', name: 'applicationUrl', message: 'Please write the application URL (e.g. https://example.com/)'}
]).then(answers => {
    console.log(answers)
    // const page = makeHTML(answers)
    // fs.writeFile('README_generated.md', page, error => {
    //     error ? console.log(error) : console.log('README_generated.md sucessfully created!')
    // })
})