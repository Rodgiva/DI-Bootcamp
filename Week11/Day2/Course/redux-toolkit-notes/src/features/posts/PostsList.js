import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "./postSlice";
import ReactionButton from "./ReactionButton";
import AddPostForm from "./AddPostForm";

const PostsList = (props) => {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const renderPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      {/* <ReactionButton post={post} /> */}
    </article>
  ));

  return (
    <>
      <section>
        <AddPostForm />
        <h2>Posts</h2>
        {posts && renderPosts}
      </section>
    </>
  );
};

export default PostsList;
