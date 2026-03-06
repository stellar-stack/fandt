import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar(){

return(

<nav className="navbar">

<h2 className="logo">Car Service</h2>

<ul>

<li><Link to="/services">Services</Link></li>
<li><Link to="/booking">Booking</Link></li>
<li><Link to="/payment">Payment</Link></li>
<li><Link to="/feedback">Feedback</Link></li>
<li><Link to="/login">Login</Link></li>

</ul>

</nav>

)

}

export default Navbar