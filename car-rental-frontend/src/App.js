import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import Payment from "./pages/Payment";
import Feedback from "./pages/Feedback";

import "./styles/App.css";

function App() {

return (

<Router>

<Navbar />

<Routes>

<Route path="/" element={<Services />} />

<Route path="/login" element={<Login />} />

<Route path="/register" element={<Register />} />

<Route path="/services" element={<Services />} />

<Route path="/booking" element={<Booking />} />

<Route path="/payment" element={<Payment />} />

<Route path="/feedback" element={<Feedback />} />

</Routes>

</Router>

);

}

export default App;