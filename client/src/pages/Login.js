import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    dispatch(login("mockToken")); // Mocked login for UI testing
    navigate("/dashboard");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login</h2>
      <div style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleLogin} style={styles.button}>
          Login
        </button>

        {/* ✅ "Create a new account? Sign Up" in Orange Below Login Button */}
        <p style={styles.signupText}>
          <span style={styles.signupHighlight}>Create a new account?</span>{" "}
          <span style={styles.signupLink} onClick={() => navigate("/signup")}>
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#0A1F44", // ✅ Dark Blue Background
  },
  heading: {
    fontFamily: "Poppins, sans-serif",
    color: "#FFFFFF",
    marginBottom: "20px",
  },
  form: {
    backgroundColor: "#ffffff",
    padding: "25px",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    width: "380px",
    textAlign: "center",
  },
  input: {
    width: "calc(100% - 20px)",
    padding: "12px",
    marginBottom: "12px",
    backgroundColor: "#F5F7FA",
    color: "#212121",
    border: "2px solid #FF5722", // ✅ Orange Border
    borderRadius: "5px",
    fontSize: "14px",
    textAlign: "left",
  },
  button: {
    backgroundColor: "#FF5722", // ✅ Orange Button
    color: "#ffffff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "180px",
    display: "block",
    margin: "12px auto",
  },
  signupText: {
    marginTop: "10px",
    fontSize: "14px",
    fontWeight: "bold",
  },
  signupHighlight: {
    color: "#FF5722", // ✅ Orange "Create a new account?"
  },
  signupLink: {
    color: "#FF5722", // ✅ Orange "Sign up"
    cursor: "pointer",
    fontWeight: "bold",
    textDecoration: "underline",
  },
};

export default Login;
