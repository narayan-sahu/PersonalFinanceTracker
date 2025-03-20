import React from "react";

const Alert = ({ type, message }) => {
  return <div style={{ ...styles.base, ...styles[type] }}>{message}</div>;
};

const styles = {
  base: {
    padding: "10px",
    borderRadius: "5px",
    fontSize: "14px",
    textAlign: "center",
    marginBottom: "10px",
  },
  success: {
    backgroundColor: "#43A047",
    color: "#ffffff",
  },
  error: {
    backgroundColor: "#E53935",
    color: "#ffffff",
  },
};

export default Alert;
