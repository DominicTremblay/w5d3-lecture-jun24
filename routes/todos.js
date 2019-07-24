const express = require('express');
const router = express.Router();

module.exports = pgClient => {
  router.get('/', (req, res) => {
    // getting all the todos from the database

    // Query object to create the query
    const query = {
      text:
        'SELECT categories.id as category_id, todos.id as todo_id, todos.task, todo.due_date FROM todos INNER JOIN categories ON categories.id = todos.category_id',
    };

    // Executing the query using a promise
    pgClient
      .query(query)
      .then(data => res.status(200).json(data.rows))
      .catch(err => res.json({ msg: err.message }));
  });

  router.post('/', (req, res) => {
    // extract the todo info from req.body
    const { task, due_date, category_id } = req.body;

    // Save the new todo to the database
    const query = {
      text:
        'INSERT INTO todos(task, due_date, category_id) VALUES ($1, $2, $3) RETURNING *',
      values: [task, due_date, category_id],
    };

    // Executing the query using a promise
    pgClient
      .query(query)
      .then(data =>
        // res.status(201).json(`${data.rowCount} rows have been inserted`)
        res.status(201).json(data.rows)
      )
      .catch(err => res.json({ msg: err.message }));
  });

  return router;
};
