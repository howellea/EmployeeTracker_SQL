import inquirer from 'inquirer';
import { addDepartment,getAllDepartments } from './serverQuery';

const task = [
    { name: 'View All Departments', value: 'view_departments' },
    { name: 'View All Roles', value: 'view_all_roles' },
    { name: 'View All Employees', value: 'view_all_employees' },
    { name: 'Add A Department', value: 'add_a_department' },
    { name: 'Add Roles', value: 'add_roles' },
    { name: 'Add Employee', value: 'add_employee' },
    { name: 'Update Employee Role', value: 'update_employee_role' }
];

async function QuestionPrompt() {
    const { task: choice } = await inquirer.prompt([
        {
            type: 'list',
            name: 'task',
            message: 'What would you like to do?',
            choices: task,
        },
    ]);

    switch (choice) {
        case 'view_departments':
            await handleViewDepartments();
            break;
        case 'add_a_department':
            await askDepartQuestion();
            break;
        case 'add_roles':
            await askRoleQuestion();
            break;
        case 'add_employee':
            await askemployeeQuestion();
            break;
        case 'update_employee_role':
            await updateEmployee();
            break;
        default:
            console.log('Invalid choice');
    }
}
// Fetch all departments
async function handleViewDepartments() {
    const departments = await getAllDepartments();
    console.table(departments);
}


// Function to add a department
async function askDepartQuestion() {
    const { departmentName } = await inquirer.prompt([
        {
            type: 'input',
            name: 'departmentName',
            message: 'What is the name of the department?',
        },
    ]);
    console.log(`Department "${departmentName}" has been added.`);
    await addDepartment(departmentName);
}


// Function to add a role
async function askRoleQuestion() {
    const { roleName, roleSalary, roleDepartment } = await inquirer.prompt([
        {
            type: 'input',
            name: 'roleName',
            message: 'What is the name of the role?',
        },
        {
            type: 'number',
            name: 'roleSalary',
            message: 'What is the salary of the role?',
        },
        {
            type: 'input',
            name: 'roleDepartment',
            message: 'Which department does the role belong to?',
        },
    ]);
    console.log(`Role "${roleName}" with salary ${roleSalary} in department "${roleDepartment}" has been added.`);
}

// Function to add an employee
async function askemployeeQuestion() {
    const { employeefirstName, employeelastName, employeeRole, employeeManager } = await inquirer.prompt([
        {
            type: 'input',
            name: 'employeefirstName',
            message: 'What is the employee\'s first name?',
        },
        {
            type: 'input',
            name: 'employeelastName',
            message: 'What is the employee\'s last name?',
        },
        {
            type: 'input',
            name: 'employeeRole',
            message: 'What is the employee\'s role?',
        },
        {
            type: 'input',
            name: 'employeeManager',
            message: 'Who is the employee\'s manager?',
        },
    ]);
    console.log(`Employee "${employeefirstName} ${employeelastName}" with role "${employeeRole}" managed by "${employeeManager}" has been added.`);
}

// Function to update an employee's role
async function updateEmployee() {
    const { updateManager } = await inquirer.prompt([
        {
            type: 'input',
            name: 'updateManager',
            message: 'Which employee\'s role do you want to update?',
        },
    ]);
    console.log(`Role updated for employee "${updateManager}".`);
}

// Call the main function to run the prompt
export { QuestionPrompt };


