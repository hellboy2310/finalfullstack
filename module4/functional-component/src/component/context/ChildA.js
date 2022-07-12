import React from "react";
import React from "./ChildB";

function childA({firstName,lastName})
{
    return(
        <div>
            <h1>This is  child a and its children b</h1>
            <ChildB fname = {firstName} lanme = {lastName}/>
        </div>
        
    )
}

export default childA