const generateREADME = ({ 
    githubUserName,
    githubRepoName,
    userName,
    userEmail,
    linkedinUserName,
    twitterUserName,
    projectTitle,
    projectSubTitle,
    projectLogo,
    applicationImg,
    applicationUrl,
    projectDescription,
    installationInstructions,
    usageInformation,
    contributionGuidelines,
    testInstructions,
    projectLicense }) => {
return `<!-- Generated README.md Template -->

[logo]: ${projectLogo}
[application-image]: ${applicationImg}
[application-url]: ${applicationUrl}

<div id="home"><div> 
<div align="center">
    <a href="https://github.com/${githubUserName}/${githubRepoName}/graphs/contributors">
        <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/${githubUserName}/${githubRepoName}?style=for-the-badge">
    <a>
        <a href="https://github.com/${githubUserName}/${githubRepoName}/network/members">
        <img alt="GitHub forks" src="https://img.shields.io/github/forks/${githubUserName}/${githubRepoName}?style=for-the-badge">
    <a>
        <a href="https://github.com/${githubUserName}/${githubRepoName}/stargazers">
        <img alt="GitHub stars" src="https://img.shields.io/github/stars/${githubUserName}/${githubRepoName}?style=for-the-badge">
    <a>
        <a href="https://github.com/${githubUserName}/${githubRepoName}/issues">
        <img alt="GitHub issues" src="https://img.shields.io/github/issues/${githubUserName}/${githubRepoName}?style=for-the-badge">
    <a>
        <a href="https://github.com/${githubUserName}/${githubRepoName}/blob/main/LICENSE">
        <img alt="GitHub license" src="https://img.shields.io/badge/License-${projectLicense}-informational?style=for-the-badge">
    <a>
        <a href="https://github.com/${githubUserName}/${githubRepoName}/commits/main">
        <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/${githubUserName}/${githubRepoName}?style=for-the-badge">
    <a>
    <a href="https://www.linkedin.com/in/${linkedinUserName}/">
        <img alt="LinkedIn shield" src="https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555">
    <a>
</div>
<br>


<!-- Header -->

<div align="center">
    <a href="https://github.com/${githubUserName}/${githubRepoName}">
        <img src="${projectLogo}" alt="Logo" width="300" height="auto">
    </a>
    <h1 align="center">${projectTitle}</h1>
    <div>
        ${projectSubTitle}
        <br>
        <a href="https://github.com/${githubUserName}/${githubRepoName}">
            <strong>Explore Documentation</strong>
        </a>
        <br>
        <br>
        <a href="https://github.com/${githubUserName}/${githubRepoName}">View Demo</a>
        ·
        <a href="https://github.com/${githubUserName}/${githubRepoName}/issues">Report Bug / Request Feature</a>
    </div>
</div>
<br>


<!-- Table of Contents -->
## Table of Contents

* [The Project](#the-project)
    * [Technology Stack](#technology-stack)
* [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
* [How to Use](#how-to-use)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Credits and Acknowledgments](#credits-and-acknowledgments)
* [Features](#features)
* [Tests](#tests)
<br>


<!-- The Project -->
## The Project

[![Application Image][application-image]][application-url]

${projectDescription}

<p align="right"> - <a href="#home">Return to Home</a></p>

### Technology Stack
Use this section to list the technologies used in the project - examples:

* [HTML](https://html.spec.whatwg.org/)
* [CSS](https://www.w3.org/TR/CSS/#css)
* [JavaScript](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- Getting Started -->
## Getting Started
Use this section to explain how to get the application started - this includes the prerequisites and the installation sections. Feel free to add more sections as needed such as testing, deployment, etc.

<p align="right"> - <a href="#home">Return to Home</a></p>

### Prerequisites
Use this section to list the prerequisites to run the application.

<p align="right"> - <a href="#home">Return to Home</a></p>

### Installation
${installationInstructions}

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- How to Use -->
## How to Use
${usageInformation}

_For more examples, please refer to the [Documentation][documentation-url]._

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- Contribuiting -->
## Contributing
${contributionGuidelines}

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- License -->
## License
This project is licensed under the terms of the ${projectLicense}. 

See \`LICENSE\` for more information.

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- Contact -->
## Contact
${userName}: ${userEmail} · LinkedIn: [${linkedinUserName}][linkedin-url] · Twitter: [@${twitterUserName}][twitter-url]

Application URL: [${applicationUrl}][application-url]

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- Credits and Acknowledgments -->
## Credits and Acknowledgments
Use this section to list your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- Features -->
## Features
**Optional:** If your project has a lot of features, list them here.

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- Tests -->
## Tests
${testInstructions}

<p align="right"> - <a href="#home">Return to Home</a></p>

<!-- References, Links and Images -->
<!-- Badges / Shields Styles -->
[github-contributors-shield]: https://img.shields.io/github/contributors/${githubUserName}/${githubRepoName}?style=for-the-badge
[github-forks-shield]: https://img.shields.io/github/forks/${githubUserName}/${githubRepoName}?style=for-the-badge
[github-stars-shield]: https://img.shields.io/github/stars/${githubUserName}/${githubRepoName}?style=for-the-badge
[github-issues-shield]: https://img.shields.io/github/issues/${githubUserName}/${githubRepoName}?style=for-the-badge
[github-license-shield]: https://img.shields.io/github/license/${githubUserName}/${githubRepoName}?style=for-the-badge
[github-last-commit-shield]: https://img.shields.io/github/last-commit/${githubUserName}/${githubRepoName}?style=for-the-badge
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555

<!-- Badges / Shields URL -->
[github-contributors-url]: https://github.com/${githubUserName}/${githubRepoName}/graphs/contributors
[github-forks-url]: https://github.com/${githubUserName}/${githubRepoName}/network/members
[github-stars-url]: https://github.com/${githubUserName}/${githubRepoName}/stargazers
[github-issues-url]: https://github.com/${githubUserName}/${githubRepoName}/issues
[github-license-url]: https://github.com/${githubUserName}/${githubRepoName}/blob/main/LICENSE
[linkedin-url]: https://linkedin.com/in/${linkedinUserName}

<!-- Non Badge / Shield Reference Links -->
[documentation-url]: https://github.com/${githubUserName}/${githubRepoName}
[twitter-url]: https://twitter.com/${twitterUserName}`
}

module.exports = generateREADME;