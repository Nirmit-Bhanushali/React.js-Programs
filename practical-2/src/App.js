import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Sample Task", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");

  // Handle the checkbox toggle
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Add new task to the list
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([
        ...tasks,
        { id: tasks.length + 1, text: newTask, completed: false },
      ]);
      setNewTask(""); // Clear input field
    }
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>

      {/* Input and button to add new task */}
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>

      {/* Task list */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <label>
              {" "}
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
              />
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.text}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
