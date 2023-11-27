import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const state = {
  users: [],
  status: "",
};

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const res = await axios.get(USERS_URL);
  return res.data;
});

const usersSlice = createSlice({
  name: "users",
  initialState: state,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = "Loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.status = "Success";
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "Failed";
      });
  },
});

export default usersSlice.reducer;
