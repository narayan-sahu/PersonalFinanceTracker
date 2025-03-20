import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>
        <i className="fas fa-lightbulb" style={styles.icon}></i>
        © 2025 Smart Spending. Smart Living. | Built with 💡 by Narayan
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: "center",
    padding: "15px",
    backgroundColor: "#0A1F44",
    color: "#FFFFFF",
    fontSize: "14px",
    boxShadow: "0px -2px 4px rgba(255, 255, 255, 0.1)",
    position: "relative",
    bottom: "0",
    width: "100%",
  },
  icon: { color: "#FFCC00", marginRight: "5px" },
};

export default Footer;
