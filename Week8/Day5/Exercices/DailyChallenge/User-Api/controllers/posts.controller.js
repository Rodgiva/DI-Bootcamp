import {
  _getAllPosts,
  _getOnePost,
  _addPost,
  _updatePost,
  _deletePost,
} from "../models/posts.model.js";

// GET /posts: Return a list of all blog posts.
// GET /posts/:id: Return a specific blog post based on its id.
// POST /posts: Create a new blog post.
// PUT /posts/:id: Update an existing blog post.
// DELETE /posts/:id: Delete a blog post.

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
