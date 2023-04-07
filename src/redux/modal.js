import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modal: false,
    warning: false,
    purchase: false,
  },
  reducers: {
    showModal: (state) => {
      state.modal = true;
    },
    removeModal: (state) => {
      state.modal = false;
    },
    showWarning: (state) => {
      state.warning = true;
    },
    removeWarning: (state) => {
      state.warning = false;
    },
    showPurchase: (state) => {
      state.purchase = true;
    },
    removePurchase: (state) => {
      state.purchase = false;
    },
  },
});

export const selectModal = (state) => state.modal.modal;
export const selectWarning = (state) => state.modal.warning;
export const selectPurchase = (state) => state.modal.purchase;

export const {
  removeModal,
  showModal,
  showWarning,
  removeWarning,
  showPurchase,
  removePurchase,
} = modalSlice.actions;
export default modalSlice.reducer;
