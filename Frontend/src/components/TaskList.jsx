import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onRemoveTask, onEditTask }) => {
  if (tasks.length === 0) {
    return (
      <p className="px-4 py-3 text-gray-500 text-center">No tasks added yet.</p>
    );
  }

  return (
    <ul className="divide-y divide-gray-200">
      {tasks.map((task, index) => (
        <TaskItem
          key={task._id || index}
          task={task}
          onRemove={() => onRemoveTask(task._id)}
          onEdit={(editText) => onEditTask(task._id, editText)}
        />
      ))}
    </ul>
  );
};

export default TaskList;
