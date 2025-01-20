import { useState } from "react";

const TaskForm = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      onAddTask(newTask);
      setNewTask("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-between px-4 py-3 border-b border-gray-200"
    >
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
        className="flex-1 border-none outline-none focus:ring-0 text-gray-600"
      />
      <button
        type="submit"
        className="ml-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
      >
        Add task
      </button>
    </form>
  );
};

export default TaskForm;
