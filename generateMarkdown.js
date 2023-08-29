// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "None") {
      return ``
    }
    else {
      return `![Badge](https://img.shields.io/badge/license-${license}-brightgreen)`
    }
  }
  // https://img.shields.io/badge/
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) { 
    if (license === "None") {
      return ``
    }
    else {
      return `## License
  This project is license with ${license}`;
    }
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) { 
  let licenseName;
  switch(license){
    case "GNU":
    licenseName = "General Public License (GNU)"
    break;
  }
    if (license === "None") {
      return ``
    }
    else {
      return `## [License]
      This project is licensed with ${licenseName}`;
    }
  }
  
  
  // TODO: Create a function to generate markdown for README
  // We use default after the export because we won't be forced to breakdown the generateMarkdown later on
  
  //In this case we don't do default so we must breakdown the genereateMarkdown {} in the idex.js
  export function generateMarkdown(response) {
    return `${renderLicenseBadge(response.license)}
    #${response.title} 
  
  ## Table of Contents
  * [Description](#description)
  ${renderLicenseLink(response.license)}
  
  ## Description
  ${response.description}
  
  ![${response.imageAlt}](${response.imageURL})
  
  
  ${renderLicenseSection(response.license)}
  
  `;
  }
  
  // module.exports = generateMarkdown;
  