import authReducer from "./reducers/authSlice.js";
import userReducer from "./reducers/userSlice.js"; 
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
})

