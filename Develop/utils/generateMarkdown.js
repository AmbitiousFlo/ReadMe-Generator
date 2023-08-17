// This function generates a Markdown badge for the specified license.
function renderLicenseBadge(license) {
  let badge;
  let formattedName = license.split(" ").join("%20");  // Convert license name to URL-friendly format
  let licenseLink = renderLicenseLink(license);  // Get the license link

  // Create a badge based on whether a license link is available
  if (licenseLink !== "") {
    badge = `[![License: ${license}](https://img.shields.io/badge/License-${formattedName}-blue.svg)](${licenseLink})`;
  } else {
    let nameForLink = "All Rights Reserved".split(" ").join("%20");
    badge = `![License: All Rights Reserved](https://img.shields.io/badge/License-${nameForLink}-tomato.svg)`;
  }

  return badge;  // Return the generated badge
}

// This function returns the URL link for the specified license.
function renderLicenseLink(license) {
  let link;

  // Determine the license link based on the provided license name
  switch (license) {
    case "Apache License 2.0":
      link = "https://opensource.org/licenses/Apache-2.0";
      break;
    case "MIT":
      link = "https://opensource.org/licenses/MIT";
      break;
    // ... (repeat for other licenses)
    default:
      link = "";  // For unknown licenses, return an empty link
  }

  return link;  // Return the generated license link
}

// This function generates the Markdown section for the specified license.
function renderLicenseSection(license, name) {
  let licenseSection;
  let licenseLink = renderLicenseLink(license);

  // Create the appropriate license section content based on the license name
  if (license !== "No License - All Rights Reserved") {
    licenseSection = `## License\nThis project is licensed under the [${license}](${licenseLink}) license.`;
  } else {
    licenseSection = `## License\n&copy; 2021 ${name} - All Rights Reserved`;
  }

  return licenseSection;  // Return the generated license section content
}

// This function generates the complete Markdown content based on user input data.
function generateMarkdown(data) {
  let licenseBadge = renderLicenseBadge(data.license);  // Generate the license badge
  let licenseSection = renderLicenseSection(data.license, data.name);  // Generate the license section content

  // Construct the complete Markdown content for the README file
  let fileToWrite = `# ${data.title}\n\n${licenseBadge}\n\n## Description\n${data.description}\n\n## Table of Contents\n* [Installation](#installation)\n* [Usage](#usage)\n* [Contributing](#contributing)\n* [Tests](#tests)\n* [Questions](#questions)\n* [License](#license)\n\n## Installation\n${data.installation}\n\n## Usage\n${data.uses}\n\n## Contributing\n${data.contributing}\n\n## Tests\n${data.tests}\n\n## Questions\nFor any questions, contact me at any time via email: ${data.email}\nCheck out my [GitHub profile](https://github.com/${data.gitHub})!\n\n${licenseSection}\n`;

  return fileToWrite;  // Return the complete Markdown content
}

module.exports = generateMarkdown;  // Export the generateMarkdown function for external use
