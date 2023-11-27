const posts = [
  {
    id: "1",
    title: "Learning Redux",
    content: "I've heard good things.",
  },
  {
    id: "2",
    title: "Actions...",
    content: "The more I say action, the more I want to do something.",
  },
];

const initialState = {
  posts: [],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "posts/getData":
      return { ...state, posts: posts };
    case "posts/addPost":
      const newPost = [...state.posts];
      const { title, content } = action.payload;
      newPost.push({
        id: newPost.length + 1,
        title: title,
        content: content,
      });
      console.log(posts);
      return { ...state, posts: newPost };
    default:
      return { ...state };
  }
};
