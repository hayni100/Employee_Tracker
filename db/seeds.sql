INSERT INTO department (department_name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finace"),
       ("Legal");


INSERT INTO role (title, department_id, salary)
VALUE   ("Sales Leader", 1, 100000),
        ("Salesperson", 1, 80000),
        ("Lead Engineer", 2, 150000),
        ("Software Engineer", 2, 12000),
        ("Account Manager", 3, 160000),
        ("Accountant", 3, 125000),
        ("Legal Team Lead",4, 250000),
        ("Lawyer", 4, 190000);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE   ("John", "Doe", 1, NULL),
        ("Jane", "Doe", 3, NULL),
        ("Carl", "Ung", 7, NULL),
        ("Kimmie", "Popper", 2, 1),
        ("yi-san", "Liu", 6, 5),
        ("Sunhee", "Kim", 4, 3);

     