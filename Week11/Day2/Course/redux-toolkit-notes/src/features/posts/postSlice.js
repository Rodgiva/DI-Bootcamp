import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const posts = [
  {
    id: "1",
    title: "Learning Redux",
    content: "I've heard good things.",
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: "2",
    title: "Actions...",
    content: "The more I say action, the more I want to do something.",
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

const initialState = {
  posts: [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: (state) => {
      state.posts = posts;
    },
    addReaction: (state, action) => {
      const [postId, reaction] = action.payload;
      const existingPost = state.posts.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
    addPost: {
      prepare(title, content) {
        return {
          payload: {
            title,
            content,
          },
        };
      },
      reducer(state, action) {
        const newPost = {
          id: state.posts.length + 1,
          //   id: nanoid(),
          title: action.payload.title,
          content: action.payload.content,
        };
        state.posts.push(newPost);
      },
    },
  },
});

export const { getPosts, addReaction, addPost } = postSlice.actions;
export default postSlice.reducer;
