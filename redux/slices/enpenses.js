import { createSlice } from "@reduxjs/toolkit";

const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: [],
    isLoading: false,
    error: null,
    totalExpenses: 0,
  },
  reducers: {
    addExpense: (state, action) => {
      state.expenses.unshift(action.payload);
    },
    addExpenseBulk: (state, action) => {
      state.expenses = action.payload;
    },
    updateTotalExpenses: (state, action) => {
      state.totalExpenses = action.payload;
    },
    deleteExpense: (state, action) => {
      state.expenses = state.expenses.filter(
        (expense) => expense._id !== action.payload
      );
    },
  },
});

export const {
  addExpense,
  addExpenseBulk,
  updateTotalExpenses,
  deleteExpense,
} = expensesSlice.actions;

export default expensesSlice.reducer;
