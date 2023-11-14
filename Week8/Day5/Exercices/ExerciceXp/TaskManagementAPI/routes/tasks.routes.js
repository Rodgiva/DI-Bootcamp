import express from "express";
import { getAllTasks, getOneTask, addTask, updateTask, deleteTask } from "../controllers/tasks.controller.js";

// GET /tasks: Retrieve a list of all tasks from a JSON file.
// GET /tasks/:id: Retrieve a specific task by ID from the JSON file.
// POST /tasks: Create a new task and store it in the JSON file.
// PUT /tasks/:id: Update a task by ID in the JSON file.
// DELETE /tasks/:id: Delete a task by ID from the JSON file.

const router = express.Router();

router.get("/", getAllTasks);
router.get("/:id", getOneTask);
router.post("/", addTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
