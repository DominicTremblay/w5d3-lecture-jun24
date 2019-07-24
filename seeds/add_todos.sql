DELETE FROM todos;
DELETE FROM categories;

ALTER SEQUENCE categories_id_seq RESTART WITH 1;
ALTER SEQUENCE todos_id_seq RESTART WITH 1;


INSERT INTO categories (category) VALUES ('Leisure');
INSERT INTO categories (category) VALUES ('Work');
INSERT INTO categories (category) VALUES ('Sport');
INSERT INTO categories (category) VALUES ('Travel');

INSERT INTO todos (task, due_date, category_id) VALUES ('Watch Game of Thrones','2019-07-25',1);
INSERT INTO todos (task, due_date, category_id) VALUES ('Go to the restaurant','2019-07-26',1);
INSERT INTO todos (task, due_date, category_id) VALUES ('Learn SQL','2019-07-27',2);
INSERT INTO todos (task, due_date, category_id) VALUES ('Work on midterm project','2019-08-01',2);
INSERT INTO todos (task, due_date, category_id) VALUES ('Go swimming','2019-08-02',3);
INSERT INTO todos (task, due_date, category_id) VALUES ('Play soccer','2019-08-02',3);
INSERT INTO todos (task, due_date, category_id) VALUES ('Visit Paris','2019-08-03',4);
INSERT INTO todos (task, due_date, category_id) VALUES ('Visit New York','2019-08-07',4);