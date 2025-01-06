// Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';

import { questions } from './utils/questions.js';



// Create a function to write README file
async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    const readMeContent = generateReadMe(answers);

    // TODOs: Writes the data to db
    fs.writeFileSync('README.md', readMeContent);
    console.log("Great job! You created README.md!");
  } catch (err) {
    console.log("README was not created, try again!");
    console.error(err);
    process.exit(1);
  }

  //TODOs: Read from db



  // TODOs: Make changes to db
}

// Function call to initialize app
init();