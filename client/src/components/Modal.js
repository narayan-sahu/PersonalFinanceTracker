import React from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2 style={styles.title}>{title}</h2>
        <div>{children}</div>
        <button onClick={onClose} style={styles.closeButton}>Close</button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
    width: "400px",
    textAlign: "center",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    color: "#212121",
  },
  title: {
    fontFamily: "Poppins, sans-serif",
    marginBottom: "15px",
  },
  closeButton: {
    backgroundColor: "#E53935",
    color: "#ffffff",
    padding: "8px 12px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "15px",
  },
};

export default Modal;
