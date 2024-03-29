import { configureStore } from "@reduxjs/toolkit";

// "@reduxjs/toolkit": "^2.1.0",

// Slices Reducers Import.
import counterReducer from "./counter/counterSlice";

// Store Configuration.
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
