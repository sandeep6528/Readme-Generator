// DONE: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'mit':
      return '![MIT Badge](https://img.shields.io/badge/MIT%20License-00aa00)';
    case 'apache':
      return '![Apache Badge](https://img.shields.io/badge/Apache%20License%202.0-8A2BE2)';
    case 'gpl3':
      return '![GPL Badge](https://img.shields.io/badge/GNU%20General%20Public%20License%20v3.0-990000)';
    default:
      return '';
  }
}

// DONE: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'mit':
      return '[https://choosealicense.com/licenses/mit/](https://choosealicense.com/licenses/mit/).';
    case 'apache':
      return '[http://www.apache.org/licenses/](http://www.apache.org/licenses/)';
    case 'gpl3':
      return '[https://choosealicense.com/licenses/gpl-3.0/](https://choosealicense.com/licenses/gpl-3.0/)';
    default:
      return '';
  }
}

// DONE: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'mit':
      return 'MIT License';
    case 'apache':
      return 'Apache License 2.0';
    case 'gpl3':
      return 'GNU General Public License v3.0';
    default:
      return '';
  }
}

// DONE: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Instructions](#instructions)
- [License](#license)
- [Tests](#tests)

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}


## Contribution

${data.contribution}

## Instructions

${data.instructions}

## License

${renderLicenseSection(data.license)}

${renderLicenseLink(data.license)}

${renderLicenseBadge(data.license)}

## Tests

${data.tests}

## GitHub

[https://github.com/username${data.gitHub}](https://github.com/username${data.gitHub})

## Contact

Email: [${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
