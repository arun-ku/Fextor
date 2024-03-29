import { createSlice } from "@reduxjs/toolkit";

const expensesSlice = createSlice({
  name: "expenses",
  initialState: { expenses: [], isLoading: false, error: null },
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push(action.payload);
    },
    addExpenseBulk: (state, action) => {
      state.expenses = action.payload;
    },
  },
});

export const { addExpense, addExpenseBulk } = expensesSlice.actions;

export default expensesSlice.reducer;
