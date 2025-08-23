import React, { useState } from 'react';
import TodoForm from './components/TodoForm.jsx';
import TodoList from './components/TodoList.jsx';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  // Function to add a new to-do
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  // Function to delete a to-do by its ID
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app-container">
      <h1>My To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;