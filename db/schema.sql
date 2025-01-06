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
  employee_salary NUMBER,
  department_id  INTEGER, FOREIGN KEY department(id)
);

CREATE TABLE employee (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(30)  NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER, FOREIGN KEY role(id),
  manager_id INTEGER
);
