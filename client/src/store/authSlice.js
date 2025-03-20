import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: !!localStorage.getItem("token"), // Check if token exists
  token: localStorage.getItem("token") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload;
      localStorage.setItem("token", action.payload); // Store JWT in localStorage
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      localStorage.removeItem("token"); // Remove JWT on logout
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
