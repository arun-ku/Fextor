import { configureStore } from "@reduxjs/toolkit";

import expensesReducer from "./slices/enpenses";
import userReducer from "./slices/user";
import expenseCategories from "./slices/expense-categories";
import analyticsReducer from "./slices/analytics";

const store = configureStore({
  reducer: {
    expenses: expensesReducer,
    userInfo: userReducer,
    expenseCategories: expenseCategories,
    analytics: analyticsReducer,
  },
});

export default store;
