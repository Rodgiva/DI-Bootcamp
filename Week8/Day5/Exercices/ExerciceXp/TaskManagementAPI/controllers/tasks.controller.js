import { _getAllTasks, _getOneTask, _addTask, _updateTask, _deleteTask } from "../models/tasks.model.js";

// GET /tasks: Retrieve a list of all tasks from a JSON file.
// GET /tasks/:id: Retrieve a specific task by ID from the JSON file.
// POST /tasks: Create a new task and store it in the JSON file.
// PUT /tasks/:id: Update a task by ID in the JSON file.
// DELETE /tasks/:id: Delete a task by ID from the JSON file.

const getAllTasks = async (req, res) => {
  try {
    const data = await _getAllTasks();
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(404).json({ msg: "No Tasks" });
  }
};


const getOneTask = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await _getOneTask(id);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(404).json({ msg: "No Task" });
  }
};

const addTask = async (req, res) => {
  const { title, content } = req.body;
  try {
    await _addTask(title, content);
    res.status(200).json({ msg: "Added successfuly" });
  } catch (err) {
    console.log(err);
    res.status(404).json({ msg: "Cannot add task" });
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    await _updateTask(id, title, content);
    res.status(200).json({ msg: "Updated successfuly" });
  } catch (err) {
    console.log(err);
    res.status(404).json({ msg: "Cannot update task" });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await _deleteTask(id);
    res.status(200).json({ msg: "Deleted successfuly" });
  } catch (err) {
    console.log(err);
    res.status(404).json({ msg: "Cannot delete task" });
  }
};


export { getAllTasks, getOneTask, addTask, updateTask, deleteTask };

/*
const getAllPosts = async (req, res) => {
  try {
    const data = await _getAllPosts();
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(404).json({ msg: "No Posts" });
  }
};

const getOnePost = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await _getOnePost(id);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(404).json({ msg: "No Post" });
  }
};

const addPost = async (req, res) => {
  const { title, content } = req.body;
  try {
    const data = await _addPost(title, content);
    // res.json(data);
    res.status(200).json({ msg: "Added successfuly" });
  } catch (e) {
    console.log(e);
    res.status(404).json({ msg: "Can not add a post" });
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const data = await _addPost(id, title, content);
    // res.json(data);
    res.status(200).json({ msg: "Updated successfuly" });
  } catch (e) {
    console.log(e);
    res.status(404).json({ msg: "Can not update a post" });
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await _deletePost(id);
    // res.json(data);
    res.status(200).json({ msg: "Deleted successfuly" });
  } catch (e) {
    console.log(e);
    res.status(404).json({ msg: "Can not delete a post" });
  }
};

export { getAllPosts, getOnePost, addPost, updatePost, deletePost };
*/
