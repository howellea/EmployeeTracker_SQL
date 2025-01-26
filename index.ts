// Include packages needed for this application
import fs from 'fs';
import pg from 'pg';
import { QuestionPrompt } from './utils/questions';

const { Pool } = pg;

const pool = new Pool();

// Initialize app
export async function init(): Promise<void> {
    try {
        // Prompt the user for answers
        const answers = await QuestionPrompt()
        console.log('User input collected:', answers);

        // Write answers to the seeds file
      
        writeAnswersToFile(answers);

        // Read and log from the database  
        console.log('Reading data from the database...');
        await runQuery();

        // Insert data into the employee table
        await insertEmployeeData(answers);

    } catch (err) {
        console.log("An error occurred, please try again.");
        console.error(err);
    }
}

// Function to run a database query
async function runQuery(): Promise<void> {
    const client = await pool.connect();
    try {
        const result = await client.query('SELECT * FROM employees');
        console.log(result.rows);
    } catch (err) {
        console.error('Error running query:', err);
    } finally {
        client.release(); // Ensure the client is released
    }
}

// Function to insert employee data into the database
async function insertEmployeeData(answers: any): Promise<void> {
    try {
        const query = fs.readFileSync('queries.sql', 'utf-8');
        const values = [answers.title, answers.employee_salary, answers.department_id]; // Adjust as per your QuestionPrompt
        await pool.query(query, values);
        console.log('Data inserted successfully!');
    } catch (err) {
        console.error('Error inserting data:', err);
    }
}

// Call init to start the application
init().catch(err => console.error(err));
function writeAnswersToFile(_answers: void) {
    throw new Error('Function not implemented.');
}

