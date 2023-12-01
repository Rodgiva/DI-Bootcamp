import { configureStore } from "@reduxjs/toolkit";
import ageReducer from "../features/age/ageCounterSlice";

const store = configureStore({
  reducer: {
    age: ageReducer,
  },
});

export default store;
