INSERT INTO department (id, name)
VALUES (1, "Sales"),
       (2, "Engineering"),
       (3, "Finace"),
       (4, "Legal");


INSERT INTO role (id, title, department, salary)
VALUE   (1, "Sales Leader", 1, 100000),
        (2, "Salesperson", 1, 80000),
        (3, "Lead Engineer", 2, 150000),
        (4, "Software Engineer", 2, 12000),
        (5, "Account Manager", 3, 160000),
        (6, "Accountant", 3, 125000),
        (7, "Legal Team Lead",4, 250000),
        (8, "Lawyer", 4, 190000);

INSERT INTO employee (id, first_name, last_name, title, department, salary, manager)