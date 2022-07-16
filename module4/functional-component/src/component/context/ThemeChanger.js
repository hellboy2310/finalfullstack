import React, {useState} from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
 export const ThemeContext = React.createContext(""); //this will help us to create the context 
 // we have exported it so that we can use it everywhere
function App(){
    let[theme,setTheme] = useState("light");


    const handleTheme = () =>{
        if(theme == 'light')
        {
            setTheme('dark');
        }
        else{
            setTheme('light')
        }
    }
    return(
       <ThemeContext.Provider value = {theme}>
        <button onClick={handleTheme}> Change Theme</button>
        <NavBar></NavBar>
        <Footer></Footer>
       </ThemeContext.Provider>  
    )
}

export default App;