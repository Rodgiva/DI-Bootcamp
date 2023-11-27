export const getData = () => {
  return {
    type: "posts/getData",
  };
};

export const addPost = (title, content) => {
  return {
    type: "posts/addPost",
    payload: {
      title,
      content,
    },
  };
};
