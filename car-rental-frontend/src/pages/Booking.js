import React,{useState} from "react";
import api from "../api";

function Booking(){

const [date,setDate] = useState("")
const [address,setAddress] = useState("")

const handleSubmit=(e)=>{

e.preventDefault()

api.post("bookings/",{
booking_date:date,
address:address,
user:1,
service:1
})

alert("Service Booked")

}

return(

<form onSubmit={handleSubmit}>

<input
type="date"
onChange={e=>setDate(e.target.value)}
/>

<input
placeholder="Address"
onChange={e=>setAddress(e.target.value)}
/>

<button>Book</button>

</form>

)

}

export default Booking