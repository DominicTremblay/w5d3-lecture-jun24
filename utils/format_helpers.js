const formatTodosCat = data => {
  const [first] = data;

  const result = {
    categorieId: first.category_id,
    category: first.category,
  };

  result.todos = data.map(todo => ({
    id: todo.id,
    task: todo.task,
    completed: todo.completed,
    due_date: todo.due_date,
    completed_on: todo.completed_on,
  }));

  return result;
};

module.exports = { formatTodosCat };
