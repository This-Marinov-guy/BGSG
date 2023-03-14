import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
  name: "error",
  initialState: {
    value: false,
    error: ''
  },
  reducers: {
    showError: (state, action) => {
      state.value = true;
      state.error = action.payload;
    },
    removeError: (state) => {
      state.value = false;
      state.error = '';
    },
  },
});

export const selectError = (state) => state.error.value;
export const selectErrorMsg = (state) => state.error.error;
export const { removeError, showError } = errorSlice.actions;
export default errorSlice.reducer;
