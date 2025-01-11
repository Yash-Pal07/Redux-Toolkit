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
        },
        removeExpense: (state, action) => {
            state.data.splice(action.payload,1);
        }
    }
});

export const { addExpense,removeExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
