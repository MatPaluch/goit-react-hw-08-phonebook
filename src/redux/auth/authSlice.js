import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, checkIsLoggedIn } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(checkIsLoggedIn.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(checkIsLoggedIn.rejected, (state, action) => {
        console.log(action.payload);
      });
  },
});

export const authReducer = authSlice.reducer;
