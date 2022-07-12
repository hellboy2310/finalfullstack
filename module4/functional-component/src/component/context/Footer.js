import { useContext } from "react";
import { ThemeContext } from "./ThemeChanger";


function Footer(){
return(<>
<div>Footer</div>
</>)
}

function FooterText(){
    let ctheme = useContext(ThemeContext);
    return(
        <div className={ctheme == 'light'?'light':'dark'}>
            FooterText
        </div>
    )
}
export default Footer;