import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: false,
  id: "",
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      const id = action.payload;
      state.id = id;
      state.isOpen = true;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
