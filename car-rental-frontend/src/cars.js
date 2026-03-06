import React,{useEffect,useState} from "react";
import api from "./api";

function Cars(){

const [cars,setCars] = useState([]);

useEffect(()=>{
api.get("cars/")
.then(res=>{
setCars(res.data);
});
},[]);

return(
<div>
<h2>Available Cars</h2>

{cars.map(car=>(
<div key={car.id}>
<h3>{car.name}</h3>
<p>Model: {car.model}</p>
<p>Seats: {car.seats}</p>
<p>Price per day: {car.price_per_day}</p>
</div>
))}

</div>
);
}

export default Cars;