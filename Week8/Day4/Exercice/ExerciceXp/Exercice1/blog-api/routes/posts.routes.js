import express from "express";
import {getAllPosts, getOnePost, addPost, updatePost, deletePost} from "../controllers/posts.controller.js";

// GET /posts: Return a list of all blog posts.
// GET /posts/:id: Return a specific blog post based on its id.
// POST /posts: Create a new blog post.
// PUT /posts/:id: Update an existing blog post.
// DELETE /posts/:id: Delete a blog post.

const router = express.Router();

router.get("/", getAllPosts);
router.get("/:id", getOnePost);
router.post("/", addPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
