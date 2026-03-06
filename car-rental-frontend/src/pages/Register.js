import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/forms.css";

function Register() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Registration Successful");
  };

  return (
    <div className="form-container">
      <h2>Create Account</h2>
      <form onSubmit={handleRegister}>
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your full name"
          required
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          required
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Create a password"
          required
          onChange={handleChange}
        />
        <button type="submit">Create Account</button>
      </form>
      <p className="form-footer">
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}

export default Register;
