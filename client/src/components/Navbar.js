import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import { FiLogOut, FiUserPlus, FiLogIn, FiBarChart2, FiDollarSign } from "react-icons/fi";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.navContent}>
        <h2 style={styles.logo}><FiBarChart2 style={styles.icon} /> Finance Tracker</h2>

        {isAuthenticated ? (
          <>
            <div style={styles.centerLinks}>
              <Link to="/dashboard" style={styles.link}><FiBarChart2 /> Dashboard</Link>
              <Link to="/expenses" style={styles.link}><FiDollarSign /> Expenses</Link>
            </div>
            <div style={styles.rightLinks}>
              <button style={styles.authButton} onClick={handleLogout}>
                <FiLogOut /> Logout
              </button>
            </div>
          </>
        ) : (
          <div style={styles.rightLinks}>
            <button style={styles.authButton} onClick={() => navigate("/login")}><FiLogIn /> Login</button>
            <button style={styles.authButton} onClick={() => navigate("/signup")}><FiUserPlus /> Sign Up</button>
          </div>
        )}
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#0A1F44",
    padding: "15px 0",
    width: "100%",
    position: "sticky",
    top: "0",
    zIndex: "1000",
    boxShadow: "0px 2px 4px rgba(255, 255, 255, 0.1)",
    display: "flex",
    justifyContent: "center",
    overflowX: "hidden", // ✅ Fix horizontal scroll
  },
  navContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%", // ✅ Ensure spacing on left & right
    maxWidth: "1300px",
  },
  logo: {
    fontFamily: "Poppins, sans-serif",
    color: "#FFFFFF",
    fontSize: "20px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  icon: { fontSize: "22px", color: "#FFCC00" },
  centerLinks: { display: "flex", gap: "20px" },
  rightLinks: { display: "flex", alignItems: "center", gap: "15px" },
  link: {
    color: "#FFFFFF",
    textDecoration: "none",
    fontSize: "16px",
    transition: "0.3s",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  authButton: {
    backgroundColor: "#FF5722",
    color: "#ffffff",
    padding: "8px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "0.3s",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
};

export default Navbar;
