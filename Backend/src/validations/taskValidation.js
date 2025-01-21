import Joi from "joi";

const taskSchema = Joi.object({
  task: Joi.string().min(3).max(100).required().messages({
    "string.base": "Task must be a string.",
    "string.empty": "Task cannot be empty.",
    "string.min": "Task must have at least {#limit} characters.",
    "string.max": "Task must not exceed {#limit} characters.",
    "any.required": "Task is required.",
  }),
});

export { taskSchema };
