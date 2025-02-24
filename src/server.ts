import { QuestionPrompt } from './utils/questions.js'


// import { connectToDb } from './connection.js';
// import { init } from '../utils/serverQuery.js' ;


// Start the Inquirer prompts
// Immediately invoking async function
(async () => {
    try {
        console.log("Starting Inquirer...");
        await QuestionPrompt(); // Trigger the Inquirer prompts
    } catch (error) {
        console.error("Error in QuestionPrompt:", error);
    }
})();

