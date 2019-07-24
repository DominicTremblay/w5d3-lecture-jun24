const express = require('express');
const router = express.Router();
const { todosByCat } = require('../utils/format_helpers');

module.exports = pgClient => {
  router.get('/:id/todos', (req, res) => {
    // extract the id value
    const { id } = req.params;

    // Query object to create the query
    const query = {
      text:
        'SELECT * FROM categories INNER JOIN todos ON categories.id = todos.category_id WHERE categories.id = $1',
      values: [id],
    };

    // Executing the query using a promise
    pgClient
      .query(query)
      // we are using todosByCat to reformat the output of the query
      .then(data => res.status(200).json(todosByCat(data.rows)))
      .catch(err => res.json({ msg: err.message }));
  });

  return router;
};
