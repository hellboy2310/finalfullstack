import { signInWithPopup,GoogleAuthProvider } from "firebase/auth"
import { useDispatch } from "react-redux"
import {auth,provider} from '../firebase'
import {loginCreator} from '../redux/action';


const Signin = () =>{
   let dispatch = useDispatch();

   (function(){
    signInWithPopup(auth,provider)
    .then((result)=>{
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;
        let{ displayName,email} = user;
        let userDetails = {displayName,email}
        dispatch(loginCreator({isAuth:true,"user":userDetails}))
    }).catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);

    
   });
})()
return(
    <></>
)
}
export default Signin