import React, { useState } from 'react';
import './TaskStyles.css';

const TaskForm = ({ onAdd }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onAdd(task);
      setTask('');
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TaskForm;
