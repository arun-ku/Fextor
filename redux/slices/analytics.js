import { createSlice } from "@reduxjs/toolkit";

const initialState = { expensesByUsers: [], expensesByCategories: [] };

const analyticsSlice = createSlice({
  name: "analytics",
  initialState,
  reducers: {
    setExpensesByUsers(state, action) {
      state.expensesByUsers = action.payload;
    },
    setExpensesByCategories(state, action) {
      state.expensesByCategories = action.payload;
    },
  },
});

export const { setExpensesByUsers, setExpensesByCategories } =
  analyticsSlice.actions;

export default analyticsSlice.reducer;
