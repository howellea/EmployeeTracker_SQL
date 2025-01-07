const task: string[] =[  
    'Add Department',
    'Add Role',
    'Add Empoyee',
    'Update Empoyee Role'
];





export const questions = [

// Prompts user to choose the type of task the want to execute.

{ type: 'list',
    name : 'task',
    message: 'What would you like to do? ',
    choices: Object.keys(task)
},

//  Addes data to department table
{
    type: 'input',
    name : '',
    message: 'What is the name of the department? '.
},

//  Addes data to roles table

{ 
    type: 'input',
    name : '',
    message: 'What is the name of the role?'.
},
{
    type: 'input',
    name : '',
    message: 'What is the salary of the role?'.
},
{ type: 'input',
    name : '',
    message: 'Which department does the role belong to?',

},

//  Addes data to employee's table
{
    type: 'input',
    name : '',
    message: 'What is the employees first name?'
},
{ 
    type: 'input',
    name : '',
    message: 'What is the employees last name?'.
},
{
    type: 'input',
    name : '',
    message: 'What is the employees role?'.
},

{type: 'input',
name : '',
message: 'Who is the employees manager?'.
},

// Allows user to update the employee role from a list of employees
    // TODOs: create a list of emplyees from db and allow user reference emplyee
{
type: 'input',
name : '',
message: 'Which employees role do you want to update?'
},
],



import inquirer from 'inquirer';

const tasks = [
    'Add Department',
    'Add Role',
    'Add Employee',
    'Update Employee Role',
];

async function main() {
    const { selectedTask } = await inquirer.prompt([
        {
            type: 'list',
            name: 'selectedTask',
            message: 'What would you like to do?',
            choices: tasks,
        },
    ]);

    switch (selectedTask) {
        case 'Add Department':
            await askDepartmentName();
            break;
        case 'Add Role':
            // Call function to handle adding a role
            break;
        case 'Add Employee':
            // Call function to handle adding an employee
            break;
        case 'Update Employee Role':
            // Call function to handle updating an employee's role
            break;
        default:
            console.log('Invalid choice');
    }
}

async function askDepartmentName() {
    const { departmentName } = await inquirer.prompt([
        {
            type: 'input',
            name: 'departmentName',
            message: 'What is the name of the department?',
        },
    ]);
    console.log(`Department "${departmentName}" has been added.`);
    // You can add logic here to save the department name
}

// Start the application
main();










