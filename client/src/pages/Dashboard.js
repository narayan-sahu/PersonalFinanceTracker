import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExpenses } from "../store/expenseSlice";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import { FiBarChart2 } from "react-icons/fi";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { expenses, totalExpenses } = useSelector((state) => state.expenses);
  const [filterCategory, setFilterCategory] = useState("");
  const [filterDate, setFilterDate] = useState("");

  useEffect(() => {
    dispatch(fetchExpenses({ category: filterCategory, date: filterDate }));
  }, [dispatch, filterCategory, filterDate]);

  return (
    <div style={styles.container}> {/* ✅ Dark Blue Background */}
      <Layout>
        <h2 style={styles.heading}><FiBarChart2 /> Dashboard</h2>

        {/* ✅ Expense Filters */}
        <div style={styles.filterContainer}>
          <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} style={styles.filterInput}>
            <option value="">All Categories</option>
            <option value="Food/Drinks">🍔 Food/Drinks</option>
            <option value="Shopping">🛒 Shopping</option>
            <option value="Transportation">🚗 Transportation</option>
            <option value="Entertainment">🎬 Entertainment</option>
            <option value="Family">👨‍👩‍👧‍👦 Family</option>
            <option value="Health/Sport">💪 Health/Sport</option>
            <option value="Pets">🐾 Pets</option>
            <option value="Travels">✈️ Travels</option>
            <option value="Other">📌 Other (Expenses)</option>
          </select>
          <input type="date" value={filterDate} onChange={(e) => setFilterDate(e.target.value)} style={styles.filterInput} />
        </div>

        {/* ✅ Total Expenses */}
        <div style={styles.card}>
          <h3>Total Expenses</h3>
          <p>₹{totalExpenses.toFixed(2)}</p>
        </div>

        {/* ✅ Display Filtered Expenses */}
        <div style={styles.expenseList}>
          {expenses.length === 0 ? (
            <p style={styles.noData}>No expenses found.</p>
          ) : (
            expenses.map((expense) => (
              <div key={expense.id} style={styles.expenseItem}>
                <p><strong>₹{expense.amount}</strong> - {expense.category}</p>
                <p>{expense.description}</p>
                <p style={styles.date}>{expense.date}</p>
              </div>
            ))
          )}
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "#0A1F44",
    color: "#FFFFFF",
    overflowX: "hidden", // ✅ Prevent horizontal scrolling
    width: "100%", // ✅ Ensure full width
    boxSizing: "border-box", // ✅ Include padding and border in the element's total width and height
  },
  heading: {
    fontFamily: "Poppins, sans-serif",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: "20px",
  },
  filterContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
    flexWrap: "wrap", // ✅ Ensure items wrap if they exceed the container width
  },
  filterInput: {
    padding: "8px",
    border: "2px solid #FF5722",
    borderRadius: "5px",
    backgroundColor: "#FFFFFF",
    color: "#212121",
    maxWidth: "100%", // ✅ Ensure inputs don't exceed container width
    boxSizing: "border-box", // ✅ Include padding and border in the element's total width and height
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    color: "#212121",
    marginBottom: "20px",
    maxWidth: "100%", // ✅ Ensure card doesn't exceed container width
    boxSizing: "border-box", // ✅ Include padding and border in the element's total width and height
  },
  expenseList: {
    marginTop: "20px",
    width: "100%", // ✅ Ensure full width
    boxSizing: "border-box", // ✅ Include padding and border in the element's total width and height
  },
  expenseItem: {
    padding: "10px",
    backgroundColor: "#FFFFFF",
    marginBottom: "10px",
    borderRadius: "5px",
    color: "#212121",
    maxWidth: "100%", // ✅ Ensure items don't exceed container width
    boxSizing: "border-box", // ✅ Include padding and border in the element's total width and height
  },
  date: {
    fontSize: "12px",
    color: "#757575",
  },
  noData: {
    textAlign: "center",
    fontStyle: "italic",
    color: "#FFFFFF",
  },
};

export default Dashboard;
