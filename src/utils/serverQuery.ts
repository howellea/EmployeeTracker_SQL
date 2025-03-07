
import { pool } from '../config/connection.js';

// Get all departments
export async function getAllDepartments() {
    try {
        const result = await pool.query("SELECT department_name FROM department;");
        return result.rows.map(row => row.department_name);
    } catch (err) {
        console.error('Error fetching departments:', err);
        return []; //Ensure it always returns an array
    }
}

// Insert a new department
export async function addDepartment(
    department_name: string) 
    {
    try {
        const result = await pool.query(
            'INSERT INTO department (department_name) VALUES ($1);',
            [department_name]
        );
        console.log(`Department "${department_name}" added successfully.`);
        return result.rows[0];
    } catch (err) {
        console.error('Error adding department:', err);
    }
}


// Add a new role to the employee_role table
export async function addRole(
    title: string, 
    employeeSalary: number, 
    departmentName: string
) {
    try {
        await pool.query(
            'INSERT INTO employee_role (title, employee_salary, department_name) VALUES ($1, $2, $3)',
            [title, employeeSalary, departmentName]
        );
        console.log(`Role "${title}" added successfully!`);
    } catch (error) {
        console.error("Error adding role:", error);
    }
}

// Add an employee by role or manager
export async function addEmployee(
    firstName: string, 
    lastName: string, 
    employeeRole: string, 
    employeeManager?: string
) {
    try {
        // Get role ID
        const roleResult = await pool.query('SELECT id FROM employee_role WHERE title = $1', [employeeRole]);
        if (!roleResult || roleResult.rowCount === 0) {
            console.log(`Error: Role "${employeeRole}" not found.`);
            return;
        }
        const roleId = roleResult.rows[0].id;

        // Get manager ID (if provided)
        let managerId: number | null = null;
        if (employeeManager) {
            const managerResult = await pool.query(
                'SELECT id FROM employees WHERE CONCAT(first_name, last_name) = $1',
                [employeeManager]
            );

            if (managerResult?.rowCount && managerResult.rowCount > 0) {
                managerId = managerResult.rows[0].id;
            } else {
                console.log(`Warning: Manager "${employeeManager}" not found. Proceeding without a manager.`);
            }
        }

        // Insert new employee into the database
        await pool.query(
            'INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)',
            [firstName, lastName, roleId, managerId]
        );

        console.log(`Employee "${firstName} ${lastName}" added successfully!`);
    } catch (error) {
        console.error("Error adding employee:", error);
    }
}


// get all employees
export async function getAllEmployees() {
    try {
        const result = await pool.query(`
            SELECT 
        e.first_name, 
        e.last_name, 
        e.employee_id, 
        e_r.title, 
        e_r.employee_salary, 
        d.department_name AS department_name 
        FROM 
        employee e
        LEFT JOIN 
        employee_role e_r ON e.role_id = e_r.id
        LEFT JOIN 
        department d ON e_r.department_id = d.id;
        `);
        return result.rows;
    } catch (error) {
        console.error("Error fetching employee:", error);
        return [];
    }
}

// View all roles 

export async function getAllRoles() {
    try {
        const result = await pool.query('SELECT * FROM employee_role;');
        return result.rows;
    } catch (err) {
        console.error('Error fetching departments:', err);
    }
}