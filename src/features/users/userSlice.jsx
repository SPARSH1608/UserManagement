import { createSlice, current } from "@reduxjs/toolkit";
import user from "../../user";

const initialState = {
  users: user,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action) => {
      const userId = action.payload;
      const index = state.users.findIndex((el) => el.id === userId);
      state.users.splice(index, 1);
    },
    editUser: (state, action) => {
      const originalUsers = current(state.users);
      const newUser = action.payload.values;
      const index = originalUsers.findIndex((obj) => obj.id === newUser.id.id);
      if (index !== -1) {
        state.users.splice(index, 1, newUser);
      }
    },
  },
});
export const { addUser, removeUser, editUser } = userSlice.actions;
export default userSlice.reducer;
