

// module.exports = generatePage;
module.exports = templateData => {
  console.log(templateData);

  return `
  # ${templateData.name}
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
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