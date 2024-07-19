import { createSlice, isAction } from "@reduxjs/toolkit";
import { register, logIn, logOut, checkIsLoggedIn } from "./operations";
import Login from "../../pages/Login";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isValid: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(logIn.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isValid = "";
        state.isRefreshing = false;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.isValid = "Incorrect Email or Password!";
        state.isRefreshing = false;
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
      .addCase(checkIsLoggedIn.rejected, (state, action) => {});
  },
});

export const authReducer = authSlice.reducer;
