import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false
    };
    setTasks([newTask, ...tasks]);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // ✅ Clear All Tasks Handler
  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to clear all tasks?")) {
      setTasks([]);
      localStorage.removeItem('tasks');
    }
  };

  return (
    <div className="app">
      <div className="todo-container">
        <h1>To-Do List</h1>

        <TaskForm onAdd={handleAddTask} />

        <TaskList
          tasks={tasks}
          onDelete={handleDeleteTask}
          onToggle={handleToggleComplete}
        />

        {tasks.length > 0 && (
          <button className="clear-btn" onClick={handleClearAll}>
            Clear All Tasks
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
