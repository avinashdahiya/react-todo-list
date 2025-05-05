import React from 'react';
import TaskItem from './TaskItem';
import './TaskStyles.css';

const TaskList = ({ tasks, onDelete, onToggle }) => {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p className="no-tasks-message">No tasks available. Add some tasks!</p>
      ) : (
        tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
