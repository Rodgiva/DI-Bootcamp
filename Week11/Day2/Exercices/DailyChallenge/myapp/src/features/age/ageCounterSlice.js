import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const state = {
  age: 0,
  loading: false,
};

const timeout = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const ageUpAsync = createAsyncThunk("age/addAge", async (obj) => {
  await timeout(1000);
  return obj.countAdd;
});

export const ageDownAsync = createAsyncThunk("age/subAge", async (obj) => {
  await timeout(1000);
  return obj.countAdd;
});

const usersSlice = createSlice({
  name: "age",
  initialState: state,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(ageUpAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(ageUpAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.age += action.payload;
      })
      .addCase(ageUpAsync.rejected, (state, action) => {
        state.loading = false;
      })
      // ----------------------------------------- \\
      .addCase(ageDownAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(ageDownAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.age -= action.payload;
      })
      .addCase(ageDownAsync.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default usersSlice.reducer;
