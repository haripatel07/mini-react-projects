import React from 'react';
import '../styles/TodoItem.css';

function TodoItem({ todo, deleteTodo }) {
  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <div className="todo-item">
      <span className="todo-text">{todo.text}</span>
      <button className="delete-button" onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default TodoItem;