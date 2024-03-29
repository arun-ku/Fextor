import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userInfo",
  initialState: { userData: {}, family: {}, isLoading: false },
  reducers: {
    setUser: (state, action) => {
      state.userData = action.payload;
    },
    setFamily: (state, action) => {
      state.family = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setUser, setFamily, setIsLoading } = userSlice.actions;

export default userSlice.reducer;
