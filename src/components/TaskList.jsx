import React from 'react';
import TaskItem from './TaskItem';
import './TaskStyles.css';

const TaskList = ({ tasks, onDelete, onToggle }) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TaskList;
