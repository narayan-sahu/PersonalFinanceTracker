import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
    try {
      const response = await axios.post("http://localhost:5029/api/auth/register", { name, email, password });
      if (response.status === 201) navigate("/dashboard");
    } catch {
      setError("Email already exists.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Sign Up</h2>
      <div style={styles.form}>
        <input 
          type="text" 
          placeholder="Full Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          style={styles.input} 
        />
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
        <button onClick={handleSignup} style={styles.button}>Sign Up</button>
        {error && <p style={styles.errorText}>{error}</p>}
        <p style={styles.signupText}>
          <span style={styles.signupHighlight}>Already have an account?</span>{" "}
          <span style={styles.signupLink} onClick={() => navigate("/login")}>
            Login here
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
    backgroundColor: "#0A1F44",
  },
  heading: {
    fontFamily: "Poppins, sans-serif",
    color: "#FFFFFF",
    marginBottom: "20px",
    fontSize: "24px",
  },
  form: {
    backgroundColor: "#FFFFFF",
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
    border: "2px solid #FF5722",
    borderRadius: "5px",
    fontSize: "14px",
    textAlign: "left",
  },
  button: {
    backgroundColor: "#FF5722",
    color: "#ffffff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "180px",
    display: "block",
    margin: "12px auto",
  },
  errorText: {
    color: "red",
    fontSize: "14px",
    marginTop: "10px",
  },
  signupText: {
    marginTop: "10px",
    fontSize: "14px",
    fontWeight: "bold",
  },
  signupHighlight: {
    color: "#FF5722", // ✅ Orange "Already have an account?"
  },
  signupLink: {
    color: "#FF5722", // ✅ Orange "Login here"
    cursor: "pointer",
    fontWeight: "bold",
    textDecoration: "underline",
  },
};

export default Signup;
