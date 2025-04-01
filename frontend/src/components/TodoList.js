import axios from "axios";

const TodoList = ({ todos, fetchTodos }) => {
  const handleToggle = async (id, completed) => {
    try {
      await axios.put(`/api/todos/${id}`, { completed: !completed });
      fetchTodos(); // Refresh list
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const toggleComplete = async (id, currentStatus) => {
    try {
      await axios.put(`/api/todos/${id}`, {
        completed: !currentStatus, // Toggle the boolean value
      });
      fetchTodos(); // Refresh the list after update
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/todos/${id}`); // Use proxy
      fetchTodos();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Todo List</h1>
      <ul style={styles.list}>
        {todos.map((todo) => (
          <li key={todo._id} style={styles.listItem}>
            <div style={styles.taskContainer}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo._id, todo.completed)}
                style={styles.checkbox}
              />
              <span
                onClick={() => handleToggle(todo._id, todo.completed)}
                style={{
                  ...styles.taskText,
                  textDecoration: todo.completed ? "line-through" : "none",
                  color: todo.completed ? "#888" : "#333",
                  transition: "text-decoration 0.3s ease, color 0.3s ease"
                }}
              >
                {todo.task}
              </span>
            </div>
            <button
              onClick={() => handleDelete(todo._id)}
              style={styles.deleteButton}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Updated styles with improved spacing for list items
const styles = {
  container: {
    maxWidth: "600px",
    margin: "50px auto",
    padding: "30px",
    background: "linear-gradient(135deg, #f5f7fa 0%, #e4e7eb 100%)",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
    fontFamily: "'Poppins', sans-serif",
  },
  header: {
    textAlign: "center",
    fontSize: "28px",
    fontWeight: "600",
    marginBottom: "25px",
    color: "#2c3e50",
    letterSpacing: "0.5px",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between", // Maintains space between taskContainer and deleteButton
    alignItems: "center",
    padding: "12px 20px",
    marginBottom: "12px",
    backgroundColor: "#fff",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    transition: "all 0.3s ease",
    gap: "20px", // Adds a gap between taskContainer and deleteButton
  },
  taskContainer: {
    display: "flex",
    alignItems: "center",
    flex: 1, // Ensures taskContainer takes up available space
    gap: "3px", // Adds spacing between checkbox and task text
  },
  checkbox: {
    marginRight: "0", // Removed marginRight since we're using gap in taskContainer
    width: "20px",
    height: "20px",
    cursor: "pointer",
    accentColor: "#007bff",
  },
  taskText: {
    flex: 5,
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "400",
    color: "#333",
    transition: "color 0.3s ease",
  },
  deleteButton: {
    padding: "6px 15px",
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    transition: "all 0.3s ease",
  },
};

export default TodoList;