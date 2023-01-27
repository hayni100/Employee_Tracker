INSERT INTO department (id, name)
VALUES (1,"Sales"),
       (2, "Engineering"),
       (3,"Finace"),
       (4,"Legal");


INSERT INTO role (id, title, department_id, salary)
VALUE   (1, "Sales Leader", 1, 100000),
        (2, "Salesperson", 1, 80000),
        (3, "Lead Engineer", 2, 150000),
        (4, "Software Engineer", 2, 12000),
        (5, "Account Manager", 3, 160000),
        (6, "Accountant", 3, 125000),
        (7, "Legal Team Lead",4, 250000),
        (8, "Lawyer", 4, 190000);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUE   (1, "John", "Doe", 1, NULL),
        (2, "Jane", "Doe", 3, NULL),
        (3, "Carl", "Ung", 7, NULL),
        (4, "Kimmie", "Popper", 2, 1),
        (5, "yi-san", "Liu", 6, 5),
        (6, "Sunhee", "Kim", 4, 3);

     