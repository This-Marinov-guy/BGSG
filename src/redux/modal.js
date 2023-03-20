import { createSlice } from "@reduxjs/toolkit";

const bodyStyle = document.getElementById('root').style;

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modal: false,
    warning: false,
  },
  reducers: {
    showModal: (state) => {
      state.modal = true;
      bodyStyle.overflowY = "hidden"
    },
    removeModal: (state) => {
      state.modal = false;
      bodyStyle.overflowY = "auto"
    },
    showWarning: (state) => {
      state.warning = true;
      bodyStyle.overflowY = "hidden"
    },
    removeWarning: (state) => {
      state.warning = false;
      bodyStyle.overflowY = "auto"
    },
  },
});

export const selectModal = (state) => state.modal.modal;
export const selectWarning = (state) => state.modal.warning;
export const { removeModal, showModal, showWarning, removeWarning } = modalSlice.actions;
export default modalSlice.reducer;
