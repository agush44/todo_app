import Task from "../models/taskModel.js";

const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.getAllTasks();
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

const addTask = async (req, res, next) => {
  try {
    const newTask = await Task.addTask(req.body);

    if (!newTask) {
      return res.status(400).json({
        status: 400,
        error: "Failed to create movie. Please try again.",
      });
    }

    res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        status: 400,
        error: "Task ID is required.",
      });
    }

    const deletedTask = await Task.deleteTask(id);

    if (!deletedTask) {
      return res.status(404).json({
        status: 400,
        error: "Task not found.",
      });
    }

    res.status(200).json({ message: "Task successfully deleted." });
  } catch (error) {
    next(error);
  }
};

export { getAllTasks, addTask, deleteTask };
