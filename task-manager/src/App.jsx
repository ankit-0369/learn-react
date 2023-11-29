// src/App.jsx
import React, { useState, useEffect, createRoot } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TaskList from '../components/TaskList';
import AddTaskForm from '../components/AddTaskForm';
import EditTaskForm from '../components/EditTaskForm';
import './index.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, { ...task, id: Date.now(), completed: false }]);
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const toggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (editedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === editedTask.id ? editedTask : task))
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/add" element={<AddTaskForm onAdd={addTask} />} />
        <Route
          path="/edit/:id"
          element={<EditTaskForm task={tasks.find((task) => task.id === parseInt(id))} onSave={editTask} />}
        />
        <Route
          path="/"
          element={
            <TaskList
              tasks={tasks}
              onDelete={deleteTask}
              onToggleComplete={toggleComplete}
              onEdit={(id) => history.push(`/edit/${id}`)}
            />
          }
        />
      </Routes>

      <nav>
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Task List
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add" className="nav-link">
              Add Task
            </Link>
          </li>
        </ul>
      </nav>
    </Router>
  );
};

export default App