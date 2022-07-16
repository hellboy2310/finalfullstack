import { useState } from "react"
import {auth} from "../firebase"
import {signInWithEmailAndPassword,signOut} from "firebase/auth";
import { async } from "@firebase/util";



function Login(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const[user,setUser] = useState(null);
    const[loader,setLoader] = useState(false);
    const[error,setError] = useState("");
    
    

    
    const trackEmail = function(e){
        setEmail(e.target.value);
    }

    const trackPassword = function(e){
        setPassword(e.target.value);
    }

    const printDetails = async function()
    {
        try{
            setLoader(true);
            let userCred = await signInWithEmailAndPassword(auth,email,password);
            setUser(userCred.user);

        }
        catch(err)
        {
            setError(err.message);
            setTimeout(()=>{
                setError("");

            },2000);
        }
        setLoader(false);
        
    }
        const logOut = async function(){
            await signOut(auth);
            setUser(null);
        }


    return (
        <>
            {error != "" ? <h1> Error is {error}</h1>:
              loader == true? <h1>...loading</h1>:
              user != null ?<> <h1>User is {user.uid}</h1><button onClick={logOut}>Log Out</button></>:         
           <>
              <input type="email" onChange={trackEmail}  placeholder="email" />
            <br></br>
            <input type="password" onChange={trackPassword} placeholder="password" />
            <br></br>
            <button type="click" onClick={printDetails}>Login</button></>
    }
            </>
    )
}
export default Login