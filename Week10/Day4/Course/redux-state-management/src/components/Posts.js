import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../redux/actions/postsAction.js";
import PostsAddForm from "./PostsAddForm.js";

const Posts = (props) => {
  const posts = useSelector((state) => state.postsReducer.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  if (!posts)
    return (
      <>
        <p>No Posts</p>
      </>
    );

  return (
    <>
      {console.log(posts)}
      <h1>Posts</h1>
      <PostsAddForm />
      {posts &&
        posts.map((item) => {
          return (
            <article key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </article>
          );
        })}
    </>
  );
};

export default Posts;
