import { useContext } from "react";

import "./theme.css"
import { ThemeContext } from "../ThemeChanger";

function NavBar(){
    return(
    <>
    <div>NavBar</div>
    <Option></Option>
    <Option></Option>
    <Option></Option>
    <div>.................................</div>
    </>
    )
}

function Options(){
    let Ctheme = useContext(ThemeContext)
    return <div className={Ctheme == 'light'?'light':'dark'}>Options</div>
}

export default NavBar