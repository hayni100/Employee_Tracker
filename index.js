const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");
const connection = require("./db/connection");
//promt options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role//
const mainPrompt = [
  {
    type: "list",
    message: "What would you like to do?",
    name: "mainPrompt",
    choices: [
      {
        name: "View All Departments",
        value: "view_departments",
      },
      {
        name: "View All Roles",
        value: "view_roles",
      },
      {
        name: "View All Employees",
        value: "view_employees",
      },
      {
        name: "Add a department",
        value: "add_department",
      },
      {
        name: "Add a role",
        value: "add_role",
      },
      {
        name: "Add an employee",
        value: "add_employee",
      },
      {
        name: "Update an employee role",
        value: "update_employee_role",
      },
    ],
  },
];

//running tasks from user selection//
function main() {
  inquirer.prompt(mainPrompt).then((answers) => {
    console.log(answers);
    if (answers.mainPrompt === "view_departments") {
      viewDepartments();
    }
    if (answers.mainPrompt === "view_roles") {
      console.log("viewing roles");
      viewRoles();
    }
    if (answers.mainPrompt === "view_employees") {
      viewEmployees();
    }
    if (answers.mainPrompt === "add_department") {
      addDepartment();
    }
    if (answers.mainPrompt === "add_role") {
      addRole();
    }
    if (answers.mainPrompt === "add_employee") {
      addEmployee();
    }
    if (answers.mainPrompt === "update_employee_role") {
      updateEmployeeRole();
    }
  });
  //Choose to view all departments
  //formatted table showing department names and department ids
  function viewDepartments() {
 
    connection.query(`select * from department `, function (err, results) {
      console.table(results);
      main();
    });
    //Choose to view all roles
    //table of job title, role id, the department that role belongs to, and the salary for that role

    //Choose to view all employees
    //table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

    //Choose to add a department
    //prompted to enter the name of the department and that department is added to the database

    //Choose to add a role
    //prompted to enter the name, salary, and department for the role and that role is added to the database

    //Choose to add an employee
    //prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

    //Choose to update an employee role
    //prompted to select an employee to update and their new role and this information is updated in the database //
  }

}
main();
