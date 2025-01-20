import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onRemoveTask }) => {
  if (tasks.length === 0) {
    return (
      <p className="px-4 py-3 text-gray-500 text-center">No tasks added yet.</p>
    );
  }

  return (
    <ul className="divide-y divide-gray-200">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onRemove={() => onRemoveTask(index)}
        />
      ))}
    </ul>
  );
};

export default TaskList;
