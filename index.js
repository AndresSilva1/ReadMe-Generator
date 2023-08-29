// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import { generateMarkdown } from "./utils/generateMarkdown.js";

// const fs = require("fs");
// const inquirer = require("inquirer");
// const path = require("path");
// const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title?"
        },
        {
            type: "input",
            name: "description",
            message: "What is the description?"
        },
        {
            type: "input",
            name: "imageAlt",
            message: "What is the image Alt?"
        },
        {
            type: "input",
            name: "imageURL",
            message: "What is the image URL?"
        },
        {
            type: "list",
            name: "license",
            message: "What is the license for this project?",
            choices: [
                { name: "Apache" },
                { name: "MIT" },
                { name: "GNU" },
                { name: "None" },
            ]
        },
    ]).then((response) => {
        fs.writeFile("generatedREADME.md", generateMarkdown(response), (err) => {
                if (err)
                  console.log(err);
                else {
                  console.log("README generated");
                }
        });
    })
}

// Function call to initialize app
init();
