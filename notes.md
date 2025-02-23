# SQL Notes

SQL - Structured Query Language


## Connecting to psql 

- command:psql
- flag username: -U
- flag database: -d
- flag password: -p

## Common Commands

- switch databases: `\c new_database_name`
- list all databases: `\l`
- list tables in the current database: `\dt`
- describe a table's columns and indexes: `\d tablename`

- loading a file: `\i /path/to/filename.sql`


## TABLE EXAMPLE

> (cmd/ctrl + shift + p) -> markdown preview

| id | course_title | course_description | active | date_updated |
| --- | ---- | --- | --- | --- |
| 1 | software development | learn how to code | 1 | 2024-12-17 19:01 |
| 2 | software development | NULL | 1 | 2024-12-17 19:01 |

## Relations

- Has One
- Has Many
- Has Many Through


- Belongs to one
- Belongs to many
- Belongs to many though

