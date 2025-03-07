
import inquirer from 'inquirer';
import { addDepartment,addRole,getAllDepartments, getAllEmployees, getAllRoles } from './serverQuery.js';

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
    const answers =  await inquirer.prompt([
        {
            type: 'list',
            name: 'task',
            message: 'What would you like to do?',
            choices: task,
        },
    ]);
const { task: choice } = answers;

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
        case 'view_all_employees':
            await handleViewEmployees();
            break;
        case 'view_all_roles':
            await handleViewRoles();
            break;   
        default:
            console.log('Invalid choice');
    }
}
// Fetch all departments
async function handleViewDepartments(): Promise<string[]> {
    const departments = await getAllDepartments(); // Assuming this fetches the departments from the DB
    console.table(departments); // This prints the departments as a table
    return departments.map((dept: { department_name: string }) => dept.department_name); // Map to just department names
}


// Function to view all employees
async function handleViewEmployees() {
    const employees = await getAllEmployees();
    if (employees.length === 0) {
        console.log("No employees found.");
    } else {
        console.table(employees); // Displays employees in a table format
        
    }
}
// Function to view all roles
async function handleViewRoles() {
    const roles = await getAllRoles();
    if (roles?.length === 0) {
        console.log("No roles found.");
    } else {
        console.table(roles); // Displays employees in a table format
        return roles?.map((roles: { title: string }) => roles.title); // Map to just department names
    }
}
// Function to add a department
async function askDepartQuestion(): Promise<string | null> {
    const { departmentName } = await inquirer.prompt([
        {
            type: 'input',
            name: 'departmentName',
            message: 'What is the name of the department?',
        },
    ]);

    try {
        // Add the department to the database (assumed to be handled by addDepartment)
        await addDepartment(departmentName);
        console.log(`Department "${departmentName}" has been added.`);
        return departmentName; // Return the new department name
    } catch (err) {
        console.error("Error adding department:", err);
        return null; // Return null if something goes wrong
    }
}


// Function to add a role
async function askRoleQuestion() {
    let departments = await handleViewDepartments();
    departments.push("Add a new department"); // Option to add a new department

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
            type: 'list',
            name: 'roleDepartment',
            message: 'Which department does the role belong to?',
            choices: departments,
        },
    ]);

    console.log(`Role "${roleName}" with salary ${roleSalary} in department "${roleDepartment}" has been added.`);

    let finalDepartment = roleDepartment;

    // If the user selects the option to add a new department
    if (roleDepartment === "Add a new department") {
        const newDept = await askDepartQuestion();
        if (!newDept) return; // Exit if department creation fails
        finalDepartment = newDept; // Update the department with the new one
    }

    // Here, you would add the role to the database using the finalDepartment
    await addRole(roleName, roleSalary, finalDepartment); // Example: Add the role
}


// Function to add an employee
async function askemployeeQuestion() {
    let role = await handleViewRoles();
    role?.push("Add a new role"); // Option to add a new role

    let employee = await handleViewEmployees();
    employee.push("Add a new department"); // Option to add a new department

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
            choices:role
        },
        {
            type: 'input',
            name: 'employeeManager',
            message: 'Who is the employee\'s manager?',
            choices:manager
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


