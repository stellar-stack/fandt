import React from "react";
import "../styles/cards.css";

function ServiceCard({service}){

return(

<div className="card">

<h3>{service.name}</h3>

<p>{service.description}</p>

<h4>₹{service.price}</h4>

<button>Book Service</button>

</div>

)

}

export default ServiceCard