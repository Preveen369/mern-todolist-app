import { useState } from "react";
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "/api";

const TodoForm = ({ fetchTodos }) => {
  const [task, setTask] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    try {
      await axios.post(`${API_BASE_URL}/api/todos`, { task });
      setTask(""); // Clear input
      fetchTodos(); // Refresh list
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{marginTop:"15px;"}}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;