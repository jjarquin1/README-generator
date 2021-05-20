
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `## ${data.title}
  
  # Table of Contents 
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributions](#contributions)
  * [Test](#tests)
  * [Questions](#questions)

  ## Description
  ${data.description}
  
  # Installation
  ${data.installation}
  
  # Usage 
  ${data.usage}
  
  # Licence
  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg)
  
  for more information about this license click here [license](https://opensource.org/licenses/${data.license})
  
  # Constributions
  ${data.contributions}
 
  # Tests
  ${data.tests}
  
  ## Questions
  Feel free to contact me through ${data.questions}
    or 
  Github: ${data.github}
  E-mail: ${data.email}
  
`;
}

module.exports = generateMarkdown;
