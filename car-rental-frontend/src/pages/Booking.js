import React, { useState } from "react";
import api from "../api";
import "../styles/forms.css";

function Booking() {
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post("bookings/", {
      booking_date: date,
      address: address,
      user: 1,
      service: 1,
    }).then(() => {
      setSubmitted(true);
    }).catch(() => {
      alert("Booking failed. Please try again.");
    });
  };

  if (submitted) {
    return (
      <div className="form-container">
        <div className="success-message">
          <h2>Booking Confirmed!</h2>
          <p>Your service has been booked successfully.</p>
          <button onClick={() => setSubmitted(false)}>Book Another</button>
        </div>
      </div>
    );
  }

  return (
    <div className="form-container">
      <h2>Book a Service</h2>
      <form onSubmit={handleSubmit}>
        <label>Booking Date</label>
        <input
          type="date"
          required
          onChange={(e) => setDate(e.target.value)}
        />
        <label>Pickup Address</label>
        <input
          type="text"
          placeholder="Enter your address"
          required
          onChange={(e) => setAddress(e.target.value)}
        />
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default Booking;
