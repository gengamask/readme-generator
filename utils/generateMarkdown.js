// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license === 'GNU AGPLv3'){
      return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
    }
    else if(license === 'Mozilla Public License 2.0'){
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    }
    else if(license === 'Apache License 2.0'){
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    }
    else if(license === 'MIT License'){
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    }
    else{
      return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'GNU AGPLv3'){
    return '[[License: AGPL v3](https://www.gnu.org/licenses/agpl-3.0.en.html)'
  }
  else if(license === 'Mozilla Public License 2.0'){
    return '[Mozilla](https://opensource.org/licenses/MPL-2.0)'
  }
  else if(license === 'Apache License 2.0'){
    return '[Apache](https://opensource.org/licenses/Apache-2.0)'
  }
  else if(license === 'MIT License'){
    return '[MIT](https://opensource.org/licenses/MIT)'
  }
  else{
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(license === ''){
        return '';
    } else{
        return `Provided by ${renderLicenseLink(license)} license\n`;
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n
${renderLicenseBadge(data.license)}\n
## Description\n
${data.description}\n
## Table of Contents \n
#[Installation](#installation) \n
#[Usage](#usage) \n
#[License](#license) \n
#[Contribution](#contribution) \n
#[Test](#contribution) \n
## Installation \n
${data.installation}\n
## Usage \n
${data.usage}\n
## License \n
${renderLicenseSection(data.license)}\n
## Contribution\n
${data.contribution}\n
## Tests \n
${data.tests}\n
## Questions
For any question, please visit my [github page](https://github.com/${data.github})
or email to ${data.email}.
`;
}

module.exports = generateMarkdown;