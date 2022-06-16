import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  role: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.role = action.payload.role;
      state.name = action.payload.name;
    },
    logoutUser: (state) => {
      state.role = "";
      state.name = "";
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
