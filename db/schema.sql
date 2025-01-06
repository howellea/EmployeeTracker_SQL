DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

\c employee_db;

CREATE TABLE department (
  id SERIAL PRIMARY KEY,
  department_name VARCHAR( 30) NOT NULL,
);

CREATE TABLE employee_role (
  id SERIAL PRIMARY KEY,
  tile VARCHAR(30) NOT NULL,
  employee_salary DECIMAL,
  department_id  INTEGER, FOREIGN KEY department(id)
);

CREATE TABLE employee (
  employee_id INSERT, FOREIGN KEY manager_id
  first_name VARCHAR(30)  NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER, FOREIGN KEY employee_role(id),
  manager_id SERIAL PRIMARY KEY
);
