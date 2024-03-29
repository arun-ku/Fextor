import { createSlice } from "@reduxjs/toolkit";

const expenseCategoriesSlice = createSlice({
  name: "expenseCategories",
  initialState: { categories: [], isLoading: false, error: null },
  reducers: {
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
    addCategoryBulk: (state, action) => {
      state.categories = action.payload;
    },
    updateCategory: (state, action) => {
      const { _id, categoryName, categoryIcon } = action.payload;
      const index = state.categories.findIndex(
        (category) => category._id === _id
      );
      state.categories[index] = { _id, categoryName, categoryIcon };
    },
  },
});

export const { addCategory, addCategoryBulk, updateCategory } =
  expenseCategoriesSlice.actions;

export default expenseCategoriesSlice.reducer;
