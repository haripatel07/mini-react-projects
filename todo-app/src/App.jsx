import React, { useState } from 'react';
import TodoForm from './components/TodoForm.jsx';
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

  return (
    <div className="app-container">
      <h1>My To-Do List</h1>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;