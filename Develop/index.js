// Required packages for the application
const fs = require("fs");  // File System module for reading and writing files
const inquirer = require("inquirer");  // Package for interactive command-line prompts
const generateMarkdown = require("./utils/generateMarkdown.js");  // Custom module for generating Markdown content

// Array of questions for user input
const questionsForUser = [
    // User input for the project title
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    // User input for a short project description
    {
        type: "input",
        name: "description",
        message: "Write a short (2-3 sentence) description of your project."
    },
    // User input for installation instructions
    {
        type: "input",
        name: "installation",
        message: "What installation instructions should users know?"
    },
    // User input for explaining how to use the application
    {
        type: "input",
        name: "uses",
        message: "Explain how to use this application."
    },
    // User input for explaining how others can contribute to the project
    {
        type: "input",
        name: "contributing",
        message: "Explain how others can contribute to your project."
    },
    // User input for explaining how to test the project
    {
        type: "input",
        name: "tests",
        message: "Explain how to test your project."
    },
    // User input for selecting a license for the project
    {
        type: "list",
        name: "license",
        message: "What license would you like to include?",
        choices: [
            "Apache License 2.0",
            "MIT",
            "GPLv3",
            "GPLv2",
            "BSD 3",
            "LGPLv3",
            "No License - All Rights Reserved"
        ]
    },
    // User input for their GitHub username
    {
        type: "input",
        name: "gitHub",
        message: "What is your GitHub username?"
    },
    // User input for their email address
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    // User input for their name
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    }
];

// Function to write the generated README file
function writeREADME(fileName, fileToWrite) {
    fs.writeFile(fileName, fileToWrite, err => {
        if (err) {
            console.log(err);
        } else {
            console.log("README created successfully!");
        }
    });
}

// Function to initialize the application
function init() {
    // Prompt the user with questions from the array
    inquirer
    .prompt(questionsForUser)
    .then((data) => {
        const fileName = `./generated-readme/README.md`;
        let fileToWrite = generateMarkdown(data);  // Generate Markdown content based on user input
        writeREADME(fileName, fileToWrite);  // Write the generated content to a file
    });
}

// Call the initialization function to start the application
init();
