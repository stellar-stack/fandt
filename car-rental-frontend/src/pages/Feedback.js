import React,{useState} from "react"
import api from "../api"

function Feedback(){

const [message,setMessage]=useState("")

const submit=()=>{

api.post("feedback/",{
message:message,
user:1
})

alert("Feedback Submitted")

}

return(

<div>

<h2>Feedback</h2>

<textarea
onChange={e=>setMessage(e.target.value)}
/>

<button onClick={submit}>Submit</button>

</div>

)

}

export default Feedback