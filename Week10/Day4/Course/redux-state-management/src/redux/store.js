import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./reducers/counterReducer";
import { postsReducer } from "./reducers/postsReducer";

export default configureStore({
  reducer: {
    counterReducer,
    postsReducer,
  },
});
