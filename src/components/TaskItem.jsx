import React from 'react';
import './TaskStyles.css';

const TaskItem = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span>{task.text}</span>
      </label>
      <button onClick={() => onDelete(task.id)}>✖</button>
    </div>
  );
};

export default TaskItem;
