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
  },
});

export const { loginUser } = userSlice.actions;

export default userSlice.reducer;
