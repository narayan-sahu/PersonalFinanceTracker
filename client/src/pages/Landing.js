import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FiUserPlus } from "react-icons/fi";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <Navbar />
      <div style={styles.heroSection}>
        <div style={styles.textContainer}>
          <h1 style={styles.heading}>Take Control of Your Finances</h1>
          <div style={styles.underline}></div>
          <p style={styles.description}>
            Track your income and expenses effortlessly. Manage your budget, set financial goals, 
            and make smarter decisions for a more secure future.
          </p>
          <button style={styles.signUpButton} onClick={() => navigate("/signup")}>
            <FiUserPlus /> Sign Up Now
          </button>
        </div>

        <div style={styles.imageContainer}>
          <img src="https://i.ibb.co/Dfs3LGkW/main.png" alt="Finance Tracker" style={styles.heroImage} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#0A1F44",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    overflowX: "hidden", // ✅ Fix horizontal scrolling
  },
  heroSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: "1200px",
    margin: "50px auto",
    flexWrap: "wrap", // ✅ Fix responsiveness
  },
  textContainer: {
    flex: "1",
    color: "#FFFFFF",
    textAlign: "left", // ✅ Set left alignment
  },
  heading: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "2.5rem",
    fontWeight: "bold",
    lineHeight: "1.2",
  },
  underline: {
    width: "60px",
    height: "4px",
    backgroundColor: "#FFCC00",
    margin: "10px 0", // ✅ Left alignment
  },
  description: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "1.1rem",
    maxWidth: "500px",
    lineHeight: "1.5",
    textAlign: "left", // ✅ Left-align the paragraph
    margin: "10px 0", // ✅ Proper spacing
  },
  signUpButton: {
    marginTop: "20px",
    backgroundColor: "#FF5722",
    color: "#FFFFFF",
    padding: "12px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontSize: "1rem",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  imageContainer: {
    flex: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  heroImage: {
    width: "100%",
    maxWidth: "500px",
    objectFit: "contain",
  },
};

export default Landing;
