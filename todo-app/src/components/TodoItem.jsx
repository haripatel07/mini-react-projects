import React from 'react';
import '../styles/TodoItem.css';

function TodoItem({ todo, deleteTodo, toggleComplete }) {
  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleToggle = () => {
    toggleComplete(todo.id);
  };

  return (
    <div className={`todo-item ${todo.isCompleted ? 'completed' : ''}`}>
      <span className="todo-text" onClick={handleToggle}>
        {todo.text}
      </span>
      <button className="delete-button" onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default TodoItem;