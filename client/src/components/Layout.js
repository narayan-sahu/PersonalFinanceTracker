import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div style={styles.container}>
      <Navbar />
      <div style={styles.content}>{children}</div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#0A1F44",
    minHeight: "100vh",
    color: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "100vw",
    overflowX: "hidden", /* ✅ Fix */
  },
  content: {
    padding: "20px",
    maxWidth: "900px",
    width: "100%",
    margin: "auto",
    textAlign: "center",
  },
};

export default Layout;
