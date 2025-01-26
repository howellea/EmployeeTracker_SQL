import inquirer from 'inquirer';

const task: string[] = [
    'View All Departments',
    'View All Roles',
    'View All Employees',
    'Add A Department', 
    'Add Role',
    'Add Employee',
    'Update Employee Role',
];

async function QuestionPrompt(): Promise<void> {

    const { task: selectedTask } = await inquirer.prompt([
        {
            type: 'list',
            name: 'task',
            message: 'What would you like to do?',
            choices: task,
        },
    ]);

    switch (selectedTask) {
        case 'Add A Department':
            await askDepartQuestion();
            break;
        case 'Add Role':
            await askRoleQuestion();
            break;
        case 'Add Employee':
            await askemployeeQuestion();
            break;
        case 'Update Employee Role':
            await updateEmpolyee();
            break;
        default:
            console.log('Invalid choice');
    }


}

// Function to add a department
async function askDepartQuestion(): Promise<void> {

    const { departmentName } = await inquirer.prompt([
        {
            type: 'input',
            name: 'departmentName',
            message: 'What is the name of the department?',
        },
    ]);
    console.log(`Department "${departmentName}" has been added.`);
}

// Function to add a role
async function askRoleQuestion(): Promise<void> {
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
async function askemployeeQuestion(): Promise<void> {
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
async function updateEmpolyee(): Promise<void> {
    const { updateManager } = await inquirer.prompt([
        {
            type: 'input',
            name: 'updateManager',
            message: 'Which employee\'s role do you want to update?',
        },
    ]);
    console.log(`Role updated for employee "${updateManager}".`);
}

export { QuestionPrompt };
