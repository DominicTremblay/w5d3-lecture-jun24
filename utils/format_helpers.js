const todosByCat = data => {
  const [first] = data;

  const output = {
    categoryId: first.category_id,
    category: first.category,
    todos: [],
  };

  for (const todoObj of data) {
    const newTodo = {
      todoId: todoObj.id,
      task: todoObj.task,
      completed: todoObj.completed,
      dueDate: todoObj.due_date,
      completedOn: todoObj.completed_on,
    };

    output.todos.push(newTodo);
  }

  return output;
};

module.exports = { todosByCat };
