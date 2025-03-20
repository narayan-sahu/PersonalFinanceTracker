import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createExpense, fetchExpenses } from "../store/expenseSlice";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import { FiDollarSign } from "react-icons/fi";
import { FaPlusCircle, FaShoppingCart, FaCar, FaUtensils, FaFilm, FaHeartbeat, FaPaw, FaPlane, FaUsers, FaEllipsisH } from "react-icons/fa";

const Expenses = () => {
  const dispatch = useDispatch();
  const { expenses } = useSelector((state) => state.expenses);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    dispatch(fetchExpenses());
  }, [dispatch]);

  const handleAddExpense = () => {
    if (!category) {
      alert("Please select a category before adding an expense.");
      return;
    }

    dispatch(createExpense({ amount, category, description, date })).then(() => {
      dispatch(fetchExpenses());
    });

    setAmount("");
    setCategory("");
    setDescription("");
    setDate("");
  };

  return (
    <div style={styles.container}>
      <Layout>
        <h2 style={styles.heading}><FiDollarSign /> Add Expense</h2>

        {/* ✅ Expense Form */}
        <div style={styles.form}>
          <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} style={styles.input} />
          <select value={category} onChange={(e) => setCategory(e.target.value)} style={styles.dropdown}>
            <option value="">Select Category</option>
            <option value="Food/Drinks">🍔 Food/Drinks <FaUtensils /></option>
            <option value="Shopping">🛒 Shopping <FaShoppingCart /></option>
            <option value="Transportation">🚗 Transportation <FaCar /></option>
            <option value="Entertainment">🎬 Entertainment <FaFilm /></option>
            <option value="Family">👨‍👩‍👧‍👦 Family <FaUsers /></option>
            <option value="Health/Sport">💪 Health/Sport <FaHeartbeat /></option>
            <option value="Pets">🐾 Pets <FaPaw /></option>
            <option value="Travels">✈️ Travels <FaPlane /></option>
            <option value="Other">📌 Other (Expenses) <FaEllipsisH /></option>
          </select>
          <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} style={styles.input} />
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} style={styles.input} />
          <button onClick={handleAddExpense} style={styles.button}><FaPlusCircle /> Add Expense</button>
        </div>

        {/* ✅ Expense List */}
        <div style={styles.expenseList}>
          {expenses.length === 0 ? (
            <p style={styles.noData}>No expenses added yet.</p>
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
    width: "100%",
    overflowX: "hidden", // ✅ Prevent horizontal scrolling
    boxSizing: "border-box", // ✅ Include padding and border in the element's total width and height
  },
  heading: {
    fontFamily: "Poppins, sans-serif",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: "20px",
    width: "100%",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "600px",
    gap: "10px",
    marginBottom: "20px",
    margin: "0 auto", // ✅ Center the form within the container
  },
  input: {
    padding: "8px",
    border: "2px solid #FF5722",
    borderRadius: "5px",
    backgroundColor: "#FFFFFF",
    color: "#212121",
    width: "100%",
    maxWidth: "100%",
    boxSizing: "border-box", // ✅ Include padding and border in the element's total width and height
  },
  dropdown: {
    padding: "8px",
    border: "2px solid #FF5722",
    borderRadius: "5px",
    backgroundColor: "#FFFFFF",
    color: "#212121",
    width: "100%",
    maxWidth: "100%",
    boxSizing: "border-box", // ✅ Include padding and border in the element's total width and height
  },
  button: {
    backgroundColor: "#FF5722",
    color: "white",
    border: "none",
    padding: "10px 15px",
    cursor: "pointer",
    borderRadius: "5px",
    transition: "0.3s",
    width: "100%",
    maxWidth: "100%",
    boxSizing: "border-box", // ✅ Include padding and border in the element's total width and height
  },
  expenseList: {
    width: "100%",
    maxWidth: "600px",
    margin: "0 auto", // ✅ Center the expense list within the container
    boxSizing: "border-box", // ✅ Include padding and border in the element's total width and height
  },
  expenseItem: {
    padding: "10px",
    backgroundColor: "#FFFFFF",
    marginBottom: "10px",
    borderRadius: "5px",
    color: "#212121",
    width: "100%",
    maxWidth: "100%",
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

export default Expenses;
