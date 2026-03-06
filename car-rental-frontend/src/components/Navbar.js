import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo"> Car<span>Rental</span>
      </h2>
      <ul>
        <li><NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""}>Services</NavLink></li>
        <li><NavLink to="/booking" className={({ isActive }) => isActive ? "active" : ""}>Booking</NavLink></li>
        <li><NavLink to="/payment" className={({ isActive }) => isActive ? "active" : ""}>Payment</NavLink></li>
        <li><NavLink to="/feedback" className={({ isActive }) => isActive ? "active" : ""}>Feedback</NavLink></li>
        <li><NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""}>Login</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
