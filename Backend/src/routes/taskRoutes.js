import { Router } from "express";
import validate from "../middleware/validate.js";
import {
  getAllTasks,
  addTask,
  editTask,
  deleteTask,
} from "../controllers/taskController.js";
import { taskSchema } from "../validations/taskValidation.js";

const taskRoutes = Router();

taskRoutes.get("/", getAllTasks);
taskRoutes.post("/", validate(taskSchema), addTask);
taskRoutes.put("/:id", validate(taskSchema), editTask);
taskRoutes.delete("/:id", deleteTask);

export { taskRoutes };
