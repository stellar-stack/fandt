import React, { useState } from "react";
import "../styles/forms.css";

function Payment() {
  const [card, setCard] = useState({ name: "", number: "", expiry: "", cvv: "" });
  const [paid, setPaid] = useState(false);

  const handleChange = (e) => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPaid(true);
  };

  if (paid) {
    return (
      <div className="form-container">
        <div className="success-message">
          <h2>Payment Successful!</h2>
          <p>Your payment has been processed. Thank you!</p>
          <button onClick={() => setPaid(false)}>Make Another Payment</button>
        </div>
      </div>
    );
  }

  return (
    <div className="form-container">
      <h2>Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <label>Cardholder Name</label>
        <input
          type="text"
          name="name"
          placeholder="Full name on card"
          required
          onChange={handleChange}
        />
        <label>Card Number</label>
        <input
          type="text"
          name="number"
          placeholder="1234 5678 9012 3456"
          maxLength="19"
          required
          onChange={handleChange}
        />
        <div className="form-row">
          <div className="form-group">
            <label>Expiry Date</label>
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              maxLength="5"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>CVV</label>
            <input
              type="password"
              name="cvv"
              placeholder="***"
              maxLength="3"
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
}

export default Payment;
