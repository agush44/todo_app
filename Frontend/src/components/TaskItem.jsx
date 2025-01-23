import { useState } from "react";

const TaskItem = ({ task, onRemove, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.task);

  const formattedDate = new Date(task.createdAt).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const handleSave = () => {
    if (editText.trim()) {
      onEdit(editText);
      setIsEditing(false);
    }
  };

  return (
    <li className="flex justify-between px-4 py-3 text-gray-800 hover:bg-gray-100">
      <div className="flex flex-col items-start">
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="border border-gray-300 rounded p-1"
          />
        ) : (
          <span>{task.task || "No task provided"}</span>
        )}
        <span className="text-gray-500 text-sm">{formattedDate}</span>
      </div>

      <div className="flex justify-end">
        <button
          onClick={isEditing ? handleSave : () => setIsEditing(true)}
          className="text-blue-500 hover:text-blue-700 px-3"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button
          onClick={onRemove}
          className="text-red-500 hover:text-red-700 px-3"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
