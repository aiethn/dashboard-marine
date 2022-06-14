import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  prime: "",
  sub: "",
};

const pagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    changePrimePage: (state, action) => {
      state.prime = action.payload;
    },
    changeSubPage: (state, action) => {
      state.sub = action.payload;
    },
  },
});

export const { changePrimePage, changeSubPage } = pagesSlice.actions;

export default pagesSlice.reducer;
