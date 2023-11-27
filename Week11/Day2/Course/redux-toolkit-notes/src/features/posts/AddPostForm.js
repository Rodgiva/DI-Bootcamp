import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost } from "./postSlice";

const AddPostForm = (props) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addPost(title, content));
  };

  return (
    <>
      <section>
        <h2>Add Post</h2>
        <form onSubmit={submitHandler}>
          <label htmlFor="postTitle">Post Title</label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="postContent">Post Content</label>
          <input
            type="text"
            id="postContent"
            name="postContent"
            onChange={(e) => setContent(e.target.value)}
          />

          <input type="submit" value="Save Post" />
        </form>
      </section>
    </>
  );
};

export default AddPostForm;
