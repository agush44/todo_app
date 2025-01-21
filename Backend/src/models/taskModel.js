import { Schema, model } from "mongoose";

const taskSchema = new Schema(
  {
    task: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Task = model("Task", taskSchema);

const getAllTasks = async () => {
  try {
    const tasks = await Task.find();
    return tasks;
  } catch (error) {
    throw {
      status: 500,
      message: "Error retrieving tasks from the database.",
    };
  }
};

const addTask = async (dataTask) => {
  try {
    const newTask = new Task(dataTask);
    await newTask.save();
    return newTask;
  } catch (error) {
    throw {
      status: 500,
      message: "Error creating the task.",
    };
  }
};

const deleteTask = async (id) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      throw {
        status: 404,
        message: "Task not found.",
      };
    }

    return deletedTask;
  } catch (error) {
    throw {
      status: 500,
      message: "Error deleting the task",
    };
  }
};

export default {
  getAllTasks,
  addTask,
  deleteTask,
};
