import * as fs from "fs";

// GET /tasks: Retrieve a list of all tasks from a JSON file.
// GET /tasks/:id: Retrieve a specific task by ID from the JSON file.
// POST /tasks: Create a new task and store it in the JSON file.
// PUT /tasks/:id: Update a task by ID in the JSON file.
// DELETE /tasks/:id: Delete a task by ID from the JSON file.

const _getAllTasks = () => {
  try {
    const data = fs.readFileSync("./config/tasks.json");
    return JSON.parse(data);
  } catch (err) {
    console.log(err);
  }
};

const _getOneTask = (id) => {
  try {
    const data = JSON.parse(fs.readFileSync("./config/tasks.json"));
    const task = data.find((item) => {
      return item["id"].toString() === id;
    });
    return task;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const _addTask = (title, content) => {
  try {
    const data = _getAllTasks();
    console.log(data[data.length -1]["id"]);
    const newData = {
      id: (data[data.length -1]["id"] + 1),
      title,
      content,
    };
    data.push(newData);

    fs.writeFileSync("./config/tasks.json", JSON.stringify(data));
  } catch (err) {
    console.log(err);
    return err;
  }
};

const _updateTask = (id, title, content) => {
  const data = _getAllTasks();
  try {
    const index = data.findIndex((item) => (item.id = id));
    data[index] = { id, title, content };
    console.log(data);
    fs.writeFileSync("./config/tasks.json", JSON.stringify(data));
  } catch (err) {
    console.log(err);
    return err;
  }
};

const _deleteTask = (id) => {
  const data = _getAllTasks();
  try {
    const index = data.findIndex((item) => (item.id == id));
    data.splice(index, 1);
    fs.writeFileSync("./config/tasks.json", JSON.stringify(data));
  } catch (err) {
    console.log(err);
    return err;
  }
};

export { _getAllTasks, _getOneTask, _addTask, _updateTask, _deleteTask };

// import db from "../config/db.js";

// GET /tasks: Retrieve a list of all tasks from a JSON file.
// GET /tasks/:id: Retrieve a specific task by ID from the JSON file.
// POST /tasks: Create a new task and store it in the JSON file.
// PUT /tasks/:id: Update a task by ID in the JSON file.
// DELETE /tasks/:id: Delete a task by ID from the JSON file.

/*

const _getAllPosts = () => {
  return db("post").select("post_id", "title", "content");
};

const _getOnePost = (id) => {
  return db("post")
    .select("post_id", "title", "content")
    .where({ post_id: id });
};

const _addPost = (title, content) => {
  return db("post").insert({ title, content }, ["post_id", "title", "content"]);
};

const _updatePost = (id, title, content) => {
  return db("post").update(
    { title, content },
    ["post_id", "title", "content"].where({ post_id: id })
  );
};

const _deletePost = (id) => {
  return db("post").where({ post_id: id }).del();
};

export { _getAllPosts, _getOnePost, _addPost, _updatePost, _deletePost };
*/
