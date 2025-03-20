import React from "react";

const Button = ({ text, onClick, type = "primary" }) => {
  return (
    <button onClick={onClick} style={styles[type]}>
      {text}
    </button>
  );
};

const styles = {
  primary: {
    backgroundColor: "#4CAF50", // Vibrant Green
    color: "#ffffff",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "0.3s",
  },
  secondary: {
    backgroundColor: "#1E88E5", // Modern Blue
    color: "#ffffff",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "0.3s",
  },
  danger: {
    backgroundColor: "#E53935", // Rich Red
    color: "#ffffff",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default Button;
