import React from 'react';
import TodoItem from './TodoItem.jsx'; 
import '../styles/TodoList.css';

function TodoList({ todos, deleteTodo }) {
  if (todos.length === 0) {
    return <p className="empty-list-message">Your to-do list is empty. Add a task!</p>;
  }

  return (
    <div className="todo-list-container">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}

export default TodoList;