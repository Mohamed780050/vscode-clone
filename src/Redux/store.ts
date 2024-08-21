import { configureStore } from "@reduxjs/toolkit";
import files from "./files";
import contextmenu from "./contextmenu";
// ...

export const store = configureStore({
  reducer: {
    files: files,
    contextmenu: contextmenu,
  },
});

// Get the type of our store variable
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"];
