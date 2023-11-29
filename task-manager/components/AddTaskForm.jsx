import React, { useState } from 'react';

const AddTaskForm = ({ onAdd }) => {
  const [task, setTask] = useState({ name: '', description: '', priority: 'low' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(task);
    setTask({ name: '', description: '', priority: 'low' });
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Task Name:
          <input type="text" name="name" value={task.name} onChange={handleInputChange} required />
        </label>
        <label>
          Task Description:
          <textarea name="description" value={task.description} onChange={handleInputChange}></textarea>
        </label>
        <label>
          Priority Level:
          <select name="priority" value={task.priority} onChange={handleInputChange}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTaskForm;
