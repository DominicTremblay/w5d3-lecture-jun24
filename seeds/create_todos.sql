DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS todos CASCADE;

CREATE TABLE categories (
  id serial PRIMARY KEY,
  category TEXT
);

CREATE TABLE todos (
  id serial PRIMARY KEY,
  task TEXT,
  completed BOOLEAN DEFAULT FALSE,
  due_date DATE,
  completed_on DATE,
  category_id INTEGER REFERENCES categories(id)
);

