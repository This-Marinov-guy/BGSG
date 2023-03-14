import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userId: null,
    token: null,
    expirationDate: null,
  },
  reducers: {
    login: {
      reducer(state, action) {
        const { userId, token, expirationDate } = action.payload;
        state.userId = userId;
        state.token = token;
        state.expirationDate = expirationDate;
        localStorage.setItem(
          "userData",
          JSON.stringify({
            userId: userId,
            token: token,
            expirationDate: expirationDate,
          })
        );
      },
      prepare(values) {
        return {
          payload: {
            ...values,
          },
        };
      },
    },
    logout: (state) => {
      state.userId = null;
      state.token = null;
      state.expirationDate = null;
      localStorage.removeItem("userData");
    },
  },
});

export const selectUser = (state) => state.user;
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
