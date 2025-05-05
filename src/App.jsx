import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: true },
  ]);

  const handleAddTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([newTask, ...tasks]);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="app">
      <div className="todo-container">
        <h1 className='text-red-500'>To-Do List</h1>
        <TaskForm onAdd={handleAddTask} />
        <TaskList
          tasks={tasks}
          onDelete={handleDeleteTask}
          onToggle={handleToggleComplete}
        />
      </div>
    </div>
  );
};

export default App;
