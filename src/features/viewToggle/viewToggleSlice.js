import { createSlice } from "@reduxjs/toolkit";

export const viewToggleSlice = createSlice({
  name: "viewToggle",
  initialState: {
    isMainView: true,
  },
  reducers: {
    toggleMainView: (state, action) => {
      state.isMainView = action.payload;
    },
  },
});

export const mainViewSelector = (state) => state.mainViewMode.isMainView;
export const { toggleMainView } = viewToggleSlice.actions;

export default viewToggleSlice.reducer;
