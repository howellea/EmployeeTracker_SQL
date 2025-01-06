INSERT INTO department (id, department_name)
VALUES
(1, 'Human Resources'),
(2, 'Engineering'),
(3, 'Marketing'),
(4, 'Finance'),
(5, 'Operations'),
(6, 'Sales'),
(7, 'IT'),
(8, 'Customer Support'),
(9, 'Legal'),
(10, 'R&D');

INSERT INTO employee_role (id, title, employee_salary, department_id)
VALUES
(1, 'HR Manager', 75000, 1),
(2, 'Software Engineer', 95000, 2),
(3, 'Marketing Specialist', 60000, 3),
(4, 'Financial Analyst', 80000, 4),
(5, 'Operations Supervisor', 70000, 5),
(6, 'Sales Representative', 55000, 6),
(7, 'IT Support Specialist', 65000, 7),
(8, 'Customer Support Agent', 45000, 8),
(9, 'Legal Advisor', 90000, 9),
(10, 'Research Scientist', 100000, 10);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
(1, 'Alice', 'Johnson', 1, NULL),
(2, 'Bob', 'Smith', 2, 1),
(3, 'Clara', 'Williams', 3, 1),
(4, 'David', 'Brown', 4, 2),
(5, 'Ella', 'Jones', 5, 3),
(6, 'Frank', 'Davis', 6, 4),
(7, 'Grace', 'Miller', 7, 2),
(8, 'Hank', 'Wilson', 8, 3),
(9, 'Ivy', 'Moore', 9, 4),
(10, 'Jack', 'Taylor', 10, 5);




