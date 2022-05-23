

// module.exports = generatePage;
module.exports = templateData => {
  console.log(templateData);

  return `
  # ${templateData.name}             ${mit}
 
  ## Table of Contents:
  ### <a name="desc" href="## Description">Description</a> 
  ### <a name="questions" href" ## Questions?">Questions</a>
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
  #### Copyright ${new Date().getFullYear()} ${templateData.name}

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files ${templateData.name}, to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  ## Contribution: 
  ${templateData.contributing}

  ## Questions? 

  ### Test: ${templateData.tests}
  ### Any additional questions please contact me at https://github.com/${templateData.questions}
  `;
};
const mit = " [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ";
