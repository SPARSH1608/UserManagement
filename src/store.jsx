import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/users/userSlice";
import modalReducer from "./features/modal/modalSlice";
export const store = configureStore({
  reducer: {
    users: userReducer,
    modal: modalReducer,
  },
});
