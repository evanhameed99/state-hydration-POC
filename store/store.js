import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

import posts from "./slices/posts_slice";

const combinedReducer = combineReducers({
  posts,
});

const universalReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // this is the prev state before SSR
      posts: {
        posts: [...action.payload.posts.posts, ...state.posts.posts],
      },
    };

    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export const makeStore = () => {
  return configureStore({
    reducer: universalReducer,
  });
};

export const wrapper = createWrapper(makeStore);
