import { createSlice } from "@reduxjs/toolkit";

const currentState = createSlice({
  name: "currentState",
  initialState: {
    currentPgae: 'chooseDate',
  },
  reducers: {
    updateCurrentPage: (state, action) => {
      state.currentPgae = action.payload;
    },
  },
});

export const { updateCurrentPage } = currentState.actions;

export default currentState.reducer;
