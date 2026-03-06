import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/cards.css";

function ServiceCard({ service }) {
  const navigate = useNavigate();

  return (
    <div className="card">
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <h4>&#8377;{service.price}</h4>
      <button onClick={() => navigate("/booking")}>Book Now</button>
    </div>
  );
}

export default ServiceCard;
