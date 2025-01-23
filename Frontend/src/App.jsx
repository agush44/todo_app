import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    setLoading(true);
    fetch(`${backendUrl}/tasks`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTasks(data);
      })
      .catch((err) => {
        setError("Failed to fetch tasks");
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const addTask = (task) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const newTask = {
      task: task,
    };

    fetch(`${backendUrl}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((response) => response.json())
      .then((data) => {
        setTasks((prevTasks) => [...prevTasks, data]);
      })
      .catch((err) => {
        setError("Failed to add task");
        console.error(err);
      });
  };

  const editTask = (taskId, taskText) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    fetch(`${backendUrl}/tasks/${taskId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task: taskText }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to edit the task");
        }
        return response.json();
      })
      .then((response) => {
        const updatedTask = response.task;
        setTasks((prevTasks) =>
          prevTasks.map((task) => (task._id === taskId ? updatedTask : task))
        );
      })
      .catch((err) => {
        console.error("Error editing task:", err);
        setError("Could not edit task. Please try again.");
      });
  };

  const removeTask = (taskId) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    fetch(`${backendUrl}/tasks/${taskId}`, { method: "DELETE" })
      .then((response) => response.json())
      .then(() => {
        setTasks((prevTasks) =>
          prevTasks.filter((task) => task._id !== taskId)
        );
      })
      .catch((err) => {
        setError("Failed to delete task");
        console.error(err);
      });
  };

  return (
    <>
      <h1>ToDo List</h1>
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-10">
        <TaskForm onAddTask={addTask} />
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <TaskList
          tasks={tasks}
          onRemoveTask={removeTask}
          onEditTask={editTask}
        />
      </div>
    </>
  );
}

export default App;
