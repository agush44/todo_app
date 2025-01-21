import express from "express";
import { connectDB } from "./src/config/mongo.js";
import errorMiddleware from "./src/middleware/errorMiddleware.js";
import { taskRoutes } from "./src/routes/taskRoutes.js";

process.loadEnvFile();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

connectDB();

app.use("/api/tasks", taskRoutes);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log("Servidor en escucha por el puerto http://localhost:" + PORT);
});
