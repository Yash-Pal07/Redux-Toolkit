import { configureStore } from "@reduxjs/toolkit";
import expenseSlice from "./reducers/expenseSlice.jsx";

export const store = configureStore({
  reducer: {
    expense: expenseSlice,
  },
});
