//This function will generate the markdown for the README file
function generateMarkdown(data) {
  return `
    # ${data.title}

    ## Description

    ${data.description}


    ## Table of Contents

    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    
    ## Installation

    ${data.installation}

    ## Usage

    ${data.usage}

    ## License

    ${data.license}

    ## Contributing

    ${data.contributing}

    ## Tests

    ${data.tests}

    ## Questions
    If you have any questions, please contact me at ${data.email}
    You can also find me on GitHub at [${data.github}]`
}

// Export the generateMarkdown function
module.exports = generateMarkdown;