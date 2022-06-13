import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  role: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeRole: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const { changeRole } = userSlice.actions;

export default userSlice.reducer;
