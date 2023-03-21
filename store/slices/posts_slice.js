import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [1],
};

export const counterSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = [...state.posts, ...action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPosts } = counterSlice.actions;

export default counterSlice.reducer;
