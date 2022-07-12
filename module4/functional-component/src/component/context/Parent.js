import { useState } from "react";


function Parent(){
    const[firstName,setFirstName] = useState("Adam");
    const[lastName,setLastName] = useState("smith");

    return(
    <div>
        <childA firstName = {firstName} lastName = {lastName}/>
    </div>
    
        )

    }
    export default Parent;