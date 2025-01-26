
import { pool, connectToDb } from './connection.js';
import { init } from '../index.js' ;
import { QuestionPrompt } from '../utils/questions.js';

async function main() {
  try {
    // Connect to the database
    await connectToDb();
    console.log('Connected to the database successfully.');

    // Initialize the application
    const data = await init();

    console.log('Application initialized with data:', data);

  // Start the Inquirer prompts
  await QuestionPrompt();

    // Example: Connect to the pool and perform an action
    const client = await pool.connect();
    try {
      console.log('Connected to the pool. Running a test query...');
      const result = await client.query('SELECT NOW()');
      console.log('Database time:', result.rows[0].now);
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('An error occurred:', error);
    process.exit(1);
  }
}

// Run the main function
main();

