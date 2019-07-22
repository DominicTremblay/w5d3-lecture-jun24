DELETE FROM categories;
DELETE FROM todos;

INSERT INTO categories (category) VALUES ('entertainment');
INSERT INTO categories (category) VALUES ('work');
INSERT INTO categories (category) VALUES ('travel');
INSERT INTO categories (category) VALUES ('sport');

INSERT INTO todos (task, category_id, due_date) VALUES ('Watch game of thrones', 1, '2019-07-25');
INSERT INTO todos (task, category_id, due_date) VALUES ('Attend Piknic Elektronik', 1, '2019-07-31');
INSERT INTO todos (task, category_id, due_date) VALUES ('Learn SQL', 2, '2019-08-01');
INSERT INTO todos (task, category_id, due_date) VALUES ('Finish Project', 2, '2019-08-10');
INSERT INTO todos (task, category_id, due_date) VALUES ('Visit Paris', 3, '2019-08-12');
INSERT INTO todos (task, category_id, due_date) VALUES ('Go to New York', 3, '2019-08-20');
INSERT INTO todos (task, category_id, due_date) VALUES ('Go swimming', 4, '2019-08-21');
INSERT INTO todos (task, category_id, due_date) VALUES ('Play Soccer', 4, '2019-08-28');
