import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getExpenses, addExpense, deleteExpense } from "../services/api";

// ✅ Fetch Expenses from API
export const fetchExpenses = createAsyncThunk(
  "expenses/fetchExpenses",
  async () => {
    const response = await getExpenses();
    return response.data;
  }
);

// ✅ Add Expense & Update Redux Store
export const createExpense = createAsyncThunk(
  "expenses/createExpense",
  async (expenseData, { dispatch }) => {
    await addExpense(expenseData);
    dispatch(fetchExpenses());
    return expenseData;
  }
);

// ✅ Delete Expense & Update Redux Store
export const removeExpense = createAsyncThunk(
  "expenses/removeExpense",
  async (id, { dispatch }) => {
    await deleteExpense(id);
    dispatch(fetchExpenses());
    return id;
  }
);

const expenseSlice = createSlice({
  name: "expenses",
  initialState: { expenses: [], totalExpenses: 0 },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchExpenses.fulfilled, (state, action) => {
      state.expenses = action.payload.expenses;
      state.totalExpenses = action.payload.expenses.reduce(
        (total, expense) => total + parseFloat(expense.amount),
        0
      );
    });
  },
});

export default expenseSlice.reducer;
