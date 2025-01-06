const Task =[
    ' Add Department',
    'Add Role',
    'Add Empoyee',
    'Update Empoyee Role',
];





export const questions = [

// Prompts user to choose the type of task the want to execute.

{ type: 'list',
    name : '',
    message: 'What would you like to do? '.
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














