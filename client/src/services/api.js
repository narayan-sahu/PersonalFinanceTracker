import axios from "axios";

const API_BASE_URL = "http://localhost:7257/api";

// Get token from localStorage
const getAuthHeaders = () => ({
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
});

// ✅ Add Expense
export const addExpense = async (expenseData) => {
  return await axios.post(`${API_BASE_URL}/expenses/add`, expenseData, getAuthHeaders());
};

// ✅ Fetch Expenses (With Filters & Pagination)
export const getExpenses = async (category, startDate, endDate, page, pageSize = 5) => {
  return await axios.get(`${API_BASE_URL}/expenses`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    params: { category, startDate, endDate, page, pageSize }
  });
};

// ✅ Delete Expense
export const deleteExpense = async (id) => {
  return await axios.delete(`${API_BASE_URL}/expenses/${id}`, getAuthHeaders());
};
