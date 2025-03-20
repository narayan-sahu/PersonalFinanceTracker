import React from "react";

const Input = ({ type, placeholder, value, onChange }) => {
  return <input type={type} placeholder={placeholder} value={value} onChange={onChange} style={styles.input} />;
};

const styles = {
  input: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#ffffff",
    color: "#212121",
    border: "1px solid #1E88E5",
    borderRadius: "5px",
    marginBottom: "10px",
  },
};

export default Input;
