import { useDispatch } from "react-redux";
import { addPost } from "../redux/actions/postsAction.js";
import { useState } from "react";

const PostsAddForm = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const addpost = (e) => {
    e.preventDefault();
    dispatch(addPost(title, content));
    setTitle("");
    setContent("");
  };

  return (
    <>
      <h2>Add a new Post:</h2>
      <form onSubmit={addpost}>
        Title:{" "}
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <br />
        Content:{" "}
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <input type="submit" value="Add Post" />
      </form>
    </>
  );
};

export default PostsAddForm;
