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
    editExpense: (state, action) => {
      state.expenses = state.expenses.map((expense) => {
        if (expense._id === action.payload._id) {
          return action.payload;
        }
        return expense;
      });
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
  editExpense,
} = expensesSlice.actions;

export default expensesSlice.reducer;
