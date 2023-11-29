import React, { useState, useEffect } from 'react';

const EditTaskForm = ({ task, onSave }) => {
  const [editedTask, setEditedTask] = useState(task);

  useEffect(() => {
    setEditedTask(task);
  }, [task]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedTask);
  };

  return (
    <div>
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Task Name:
          <input type="text" name="name" value={editedTask.name} onChange={handleInputChange} required />
        </label>
        <label>
          Task Description:
          <textarea name="description" value={editedTask.description} onChange={handleInputChange}></textarea>
        </label>
        <label>
          Priority Level:
          <select name="priority" value={editedTask.priority} onChange={handleInputChange}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditTaskForm;
