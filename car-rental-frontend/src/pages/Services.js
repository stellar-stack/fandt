import React,{useState,useEffect} from "react";
import api from "../api";
import ServiceCard from "../components/ServiceCard";

function Services(){

const [services,setServices] = useState([]);

useEffect(()=>{

api.get("services/")
.then(res=>{
setServices(res.data);
});

},[]);

return(

<div className="services">

<h2>Car Services</h2>

<div className="service-grid">

{services.map(service=>(
<ServiceCard key={service.id} service={service}/>
))}

</div>

</div>

)

}

export default Services