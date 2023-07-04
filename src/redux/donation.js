import { createSlice } from "@reduxjs/toolkit";

export const donationSlice = createSlice({
  name: "donation",
  initialState: {
    value: false,
  },
  reducers: {
    showDonation: (state) => {
      state.value = true;
    },
    removeDonation: (state) => {
      state.value = false;
    },
  },
});

export const selectDonation = (state) => state.donation.value;
export const { showDonation, removeDonation } = donationSlice.actions;
export default donationSlice.reducer;
