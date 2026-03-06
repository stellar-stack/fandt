import React, { useState } from "react";
import api from "../api";
import "../styles/forms.css";

function Feedback() {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post("feedback/", {
      message: message,
      user: 1,
    }).then(() => {
      setSubmitted(true);
    }).catch(() => {
      alert("Could not submit feedback. Please try again.");
    });
  };

  if (submitted) {
    return (
      <div className="form-container">
        <div className="success-message">
          <h2>Thank You!</h2>
          <p>Your feedback has been submitted successfully.</p>
          <button onClick={() => { setSubmitted(false); setMessage(""); }}>
            Submit Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="form-container">
      <h2>Share Your Feedback</h2>
      <form onSubmit={handleSubmit}>
        <label>Your Message</label>
        <textarea
          placeholder="Tell us about your experience..."
          rows="5"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

export default Feedback;
