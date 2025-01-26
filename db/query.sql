
-- View all data 
    -- View All Departments
SELECT * FROM department ;

    -- View All Roles
SELECT * FROM employee_role;

    -- View All Employees
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
    

-- Add/ Insert New Entires 
    -- Add Role
INSERT INTO employee_role (title,employee_salary,department_name)
VALUES ($1, $2, $3);

    -- Add Empoyee
INSERT INTO employee (role_id,first_name, last_name, employee_id);
VALUES ($1, $2, $3)

   -- Add New Department
INSERT INTO department (department_name)

-- Update all changes 
    -- Update Empoyee Role
UPDATE employee;
SET 
    role_id = $1, 
    first_name = $2, 
    last_name = $3
WHERE employee_id = $4;



--   department
--     department_name 


--   employee_role
--     title
--     employee_salary


DELETE FROM employee
WHERE employee_id = $1;








