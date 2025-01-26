-- Drop the database if it exists
DROP DATABASE IF EXISTS employee_db;

-- Create a new database
CREATE DATABASE employee_db;

-- Connect to the new database
\c employee_db;

-- Create the department table
CREATE TABLE department (
  id SERIAL PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL
);

-- Create the employee_role table
CREATE TABLE employee_role (
  id SERIAL PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  employee_salary DECIMAL,
  department_id INTEGER,
  CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id)
);

-- Create the employee table
CREATE TABLE employee (
  employee_id SERIAL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER,
  manager_id INTEGER,
  CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES employee_role(id),
  CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(employee_id)