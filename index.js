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

// inquirer
// .prompt ([
//   {
//     type: "input",
//     message: "What is the name of the department?",
//     name: "department_name",
//   },
// ]);

// const addRoleP = [
//   {
//     type: "input",
//     message: "What is the name of the role?",
//     name: "role_name",
//   },
//   {
//     type: "input",
//     message: "What is the salary of the role?",
//     name: "role_salary",
//   },
//   {
//     type: "input",
//     message: "Which department does the role belong to?",
//     choices:
//   }
// ]

//running tasks from user selection//
function main() {
  inquirer.prompt(mainPrompt).then((answers) => {
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
}
//Choose to view all departments
//formatted table showing department names and department ids
function viewDepartments() {
  connection.query(`select * from department `, function (err, results) {
    console.table(results);
    main();
  });
}
//Choose to view all roles
//table of job title, role id, the department that role belongs to, and the salary for that role
function viewRoles() {
  connection.query(`select * from role`, function (err, results) {
    console.table(results);
    main();
  });
}
//Choose to view all employees
//table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
function viewEmployees() {
  connection.query(`select * from employee`, function (err, results) {
    console.table(results);
    main();
  });
}
//Choose to add a department
//prompted to enter the name of the department and that department is added to the database

function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of the department?",
        name: "department_name",
      },
    ])
    .then((answers) => {
      console.log(
        "[ Successfully added " + answers.department_name + " to the database ]"
      );
      connection.query("INSERT INTO department SET?", {
        department_name: answers.department_name,
      });
      main();
    });
}
//Choose to add a role
//prompted to enter the name, salary, and department for the role and that role is added to the database
function addRole() {
  // check all depts
  connection
    .promise()
    .query("SELECT * FROM department")
    .then((res) => {
      // create an array based on user input
      return res[0].map((dept) => {
        return {
          name: dept.id,
          value: dept.name,
        };
      });
    })
    .then((departments) => {
      return inquirer.prompt([
        {
          type: "input",
          name: "roles",
          message: "What is the name of the role?",
        },
        {
          type: "input",
          name: "salary",
          message: "What is the salary of the role?",
        },
        {
          type: "list",
          name: "depts",
          //Only spits out id not names NEED TO FIX also keeps repeating//
          choices: departments, 
          message: "Which department does this belong to?",
        },
      ]);
    })
    .then((answer) => {
      console.log(answer);
      return connection.promise().query("INSERT INTO role SET ?", {
        title: answer.roles,
        salary: answer.salary,
        department_id: answer.depts,
      });
    });
}
//Choose to add an employee
//prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
function addEmployee() {
  console.log("You chose to add an employee");
}
//Choose to update an employee role
//prompted to select an employee to update and their new role and this information is updated in the database //
main();
