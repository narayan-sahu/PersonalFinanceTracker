import React from "react";

const Form = ({ fields, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} style={styles.form}>
      {fields.map((field, index) => (
        <div key={index} style={styles.formGroup}>
          <label style={styles.label}>{field.label}</label>
          <input
            type={field.type}
            value={field.value}
            onChange={field.onChange}
            placeholder={field.placeholder}
            style={styles.input}
          />
        </div>
      ))}
      <button type="submit" style={styles.button}>Submit</button>
    </form>
  );
};

const styles = {
  form: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    color: "#212121",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    fontFamily: "Poppins, sans-serif",
    marginBottom: "5px",
    color: "#212121",
  },
  input: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#F5F7FA",
    color: "#212121",
    border: "1px solid #1E88E5",
    borderRadius: "5px",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "#ffffff",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Form;
