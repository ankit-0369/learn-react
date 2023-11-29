import React, { useState, useEffect } from 'react';

const TaskList = ({ tasks, onDelete, onToggleComplete, onEdit }) => {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
              onClick={() => onToggleComplete(task.id)}
            >
              {task.name}
            </span>
            <button onClick={() => onDelete(task.id)}>Delete</button>
            <button onClick={() => onEdit(task.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
