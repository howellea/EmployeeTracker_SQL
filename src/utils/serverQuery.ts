
import { pool } from '../config/connection.js';

// Get all departments
export async function getAllDepartments() {
    try {
        const result = await pool.query('SELECT * FROM department;');
        return result.rows;
    } catch (err) {
        console.error('Error fetching departments:', err);
    }
}

// Insert a new department
export async function addDepartment(departmentName: string) {
    try {
        const result = await pool.query(
            'INSERT INTO department (name) VALUES ($1) RETURNING *;',
            [departmentName]
        );
        console.log(`Department "${departmentName}" added successfully.`);
        return result.rows[0];
    } catch (err) {
        console.error('Error adding department:', err);
    }
}



