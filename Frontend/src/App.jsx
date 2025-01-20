import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };
  return (
    <>
      <h1>ToDo List</h1>
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-10">
        <TaskForm onAddTask={addTask} />
        <TaskList tasks={tasks} onRemoveTask={removeTask} />
      </div>
    </>
  );
}

export default App;
