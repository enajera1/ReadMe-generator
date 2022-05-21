
const generatePage = (name, github) => {
  return `
    # ${project.name}
    ## Hello world?
  `;
};

// module.exports = generatePage;
module.exports = templateData => {
  console.log(templateData);

  return `
  # ${templateData.name}

  ## Description :${templateData.description}
  
  ## Link: ${templateData.link}

  ## Installation: ${templateData.installation}

  ## Usage: ${templateData.usage}

  ## License: ${templateData.license}

  ## Contribution: ${templateData.contributing}

  ## Questions? 

  ### Test: ${templateData.tests}
  ### Any additional questions please contact me at [${templateData.questions}]
  `;
};