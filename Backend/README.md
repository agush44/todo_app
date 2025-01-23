# ToDo List API and Frontend

## Description

This project is a ToDo List application that allows you to add, edit, delete, and view tasks. The backend is built with **Node.js**, **Express**, and **MongoDB**, while the frontend is developed using **React**. The API is documented with **Swagger** for easy integration and testing.

## Prerequisites

- Node.js
- MongoDB (you can use MongoDB Atlas if you don't have a local database)
- A text editor like Visual Studio Code

## Project Structure

```
/my-todo-app
  /backend (API backend)
    /models
    /controllers
    /routes
    /swagger.yaml (API documentation with Swagger)
    app.js (Express server configuration)
  /frontend (React frontend)
    /src
      /components
        TaskForm.jsx
        TaskList.jsx
        TaskItem.jsx
    App.jsx
    index.js
    index.css
  README.md
  package.json
```

---

## Backend

### Prerequisites

For the backend, make sure you have:

- **Node.js**
- **MongoDB** (you can use MongoDB locally or MongoDB Atlas)

### Backend Installation

1. Navigate to the `backend` folder and run:

```bash
cd backend
npm install
```

2. In the `index.js` file, modify the MongoDB connection to point to your database (local or Atlas):

```javascript
mongoose.connect("mongodb://localhost:27017/mytodo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
```

Or, if using MongoDB Atlas:

```javascript
mongoose.connect("mongodb+srv://<your-atlas-db-uri>", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
```

### Running the Backend

Once configured, you can run the backend with:

```bash
npm start
```

The server should be running at `http://localhost:3005`.

---

## Frontend

### Prerequisites

Make sure you have **Node.js** installed to manage the React environment.

### Frontend Installation

1. Navigate to the `frontend` folder and run:

```bash
cd frontend
npm install
```

2. MongoDB Connection

Environment configuration file

Port where the application will run
PORT=3000

MongoDB connection URI
MONGO_URI=your_mongo_connection_uri

Running the Frontend

To start the frontend, run:

```bash
npm start
```

---

## Swagger

This project uses **Swagger** to document the API.

### Access Swagger Documentation

To access the API documentation, open a browser and go to:

```
http://localhost:3005/api-docs
```

This will bring up an interactive interface where you can see all available endpoints (GET, POST, PUT, DELETE) for tasks, with examples on how to use each.

### Swagger Configuration

Swagger is integrated into the `swagger.yaml` file located inside the `/backend` folder. If you need to add more details or modify the endpoints structure, simply edit this file.

---

## API Endpoints

### **1. Get All Tasks (GET `/tasks`)**

- **Description**: Fetch all the stored tasks.
- **Response 200**: List of tasks.

### **2. Create New Task (POST `/tasks`)**

- **Description**: Create a new task.
- **Request Body**:
  ```json
  {
    "task": "Task description"
  }
  ```
- **Response 201**: The newly created task with its ID.

### **3. Edit Task by ID (PUT `/tasks/{id}`)**

- **Description**: Edit a task by its ID.
- **Request Body**:
  ```json
  {
    "task": "Updated task description"
  }
  ```
- **Response 200**: The updated task.
- **Response 404**: If the task is not found.

### **4. Delete Task (DELETE `/tasks/{id}`)**

- **Description**: Delete a specific task by its ID.
- **Response 200**: A message confirming that the task was deleted.
- **Response 404**: If the task is not found.

---

## Model Structure

The **Task** model in the backend is defined as follows:

```javascript
const taskSchema = new Schema(
  {
    task: { type: String, required: true }, // Task description
  },
  {
    timestamps: true, // Automatically tracks createdAt and updatedAt
  }
);
```
