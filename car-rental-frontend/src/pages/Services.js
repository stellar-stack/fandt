import React, { useState, useEffect } from "react";
import api from "../api";
import ServiceCard from "../components/ServiceCard";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    api.get("services/").then((res) => {
      setServices(res.data);
    });
  }, []);

  return (
    <div className="services">
      <h2>Our Car Services</h2>
      <p className="services-subtitle">Choose from our range of premium services</p>
      <div className="service-grid">
        {services.length === 0 ? (
          <p className="no-services">No services available right now.</p>
        ) : (
          services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))
        )}
      </div>
    </div>
  );
}

export default Services;
