import { configureStore } from "@reduxjs/toolkit";

import expensesReducer from "./slices/enpenses";
import userReducer from "./slices/user";
import expenseCategories from "./slices/expense-categories";

const store = configureStore({
  reducer: {
    expenses: expensesReducer,
    userInfo: userReducer,
    expenseCategories: expenseCategories,
  },
});

export default store;
