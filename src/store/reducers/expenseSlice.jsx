import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
};

const expenseSlice = createSlice({
    name: "expenses",
    initialState,
    reducers: {
        addExpense: (state, action) => {
            state.data.push(action.payload);
        }
    }
});

export const { addExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
