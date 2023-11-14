import db from "../config/db.js";

// GET /posts: Return a list of all blog posts.
// GET /posts/:id: Return a specific blog post based on its id.
// POST /posts: Create a new blog post.
// PUT /posts/:id: Update an existing blog post.
// DELETE /posts/:id: Delete a blog post.

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
