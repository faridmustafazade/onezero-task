import { configureStore } from "@reduxjs/toolkit";
import menu from "./slice/menu";
import counterReducer from "./slice/counter";
export const store = configureStore({
  reducer: {
    menu: menu,
    counter: counterReducer,
  },
});
