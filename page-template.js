

// module.exports = generatePage;
module.exports = templateData => {
  console.log(templateData);

  return `
  # ${templateData.name}             ${mit}
 
  ## Description:
  ${templateData.description}

  ## Link: 
  ${templateData.link}

  ## Installation: 
  ${templateData.installation}
  
  ## Usage: 
  ${templateData.usage}

  ## License: 
  ${templateData.license}

  ## Contribution: 
  ${templateData.contributing}

  ## Questions? 

  ### Test: ${templateData.tests}
  ### Any additional questions please contact me at https://github.com/${templateData.questions}
  `;
};
const mit = " [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ";
const bsd = " [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause) ";