import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./formSlice";
import loginReducer from "./loginSlice";

export const store = configureStore({
  reducer: {
    form: formReducer,
    login: loginReducer,
  },
});
