const TaskItem = ({ task, onRemove }) => {
  return (
    <li className="flex justify-between items-center px-4 py-3 text-gray-800 hover:bg-gray-100">
      <span>{task}</span>
      <button onClick={onRemove} className="text-red-500 hover:text-red-700">
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
