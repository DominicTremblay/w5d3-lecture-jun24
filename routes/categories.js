const express = require('express');
const router = express.Router();
const { formatTodosCat } = require('../utils/format_helpers');

module.exports = DataHelpers => {
  router.get('/:id/todos', (req, res) => {
    const { id } = req.params;

    DataHelpers.getTodosByCategory(id, (err, todos) => {
      if (err) {
        return res.json({ msg: err.message });
      }
      res.status(200).json(formatTodosCat(todos));
    });
  });

  return router;
};
