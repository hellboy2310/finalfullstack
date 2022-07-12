

import { useEffect, useState } from "react";

function Ue3(){
    const[count,setCount] = useState(0);
    const[name,setName] = useState("purohit");

    useEffect(()=>{
        document.title = `This my title ${count} ${name} `
    },[name,count])

    return (
        <div>
            <h1>This is a Counter {count}</h1>
            <h1>{name}</h1>
            <button onClick={()=>setCount(count + 1)}>+1</button>
            <button onClick={()=>setName("Bhavesh")}>ChangeName</button>
        </div>
    )





}

export default Ue3