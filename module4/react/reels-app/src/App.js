import Feed from "./components/Feed"
import Login from "./components/Login"
import './App.css';
import PageNotFound from "./components/PageNotFound"
import {Switch,Route,Redirect} from "react-router-dom"
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import {AuthContext,AuthContextProvider} from './context/AuthContext';
import {useContext} from 'react';



function App() {
  return (
    <AuthContextProvider>
   <Switch>
    <PrivateRoute path ='/feed' comp = {Feed}>
      </PrivateRoute>
    

    
      <RedirectToFeed path = '/login' comp = {Login}></RedirectToFeed> 
      {/* <Login></Login> */}
    
    <RedirectToFeed path = '/singup' comp = {Signup}></RedirectToFeed>
      {/* <Signup></Signup> */}
    
    <PrivateRoute path = "/profile" comp = {Profile}>

    </PrivateRoute>
    
    {/* <Route path="/profile">
      <Profile></Profile>
  </Route>*/}
  <Redirect from ='/' to ='/feed'></Redirect>
      <Route>
        <PageNotFound></PageNotFound>
        </Route>    

   </Switch>
   </AuthContextProvider>
  );
}

function PrivateRoute(props)
{
  let Component = props.comp;
  let cUser = useContext(AuthContext);
  return(
    <Route 
    {...props}
    render = {
      (props)=>{
        return cUser != null ? <Component {...props}></Component>:<Redirect {...props} to ="/login"></Redirect>
      }
    } 
    ></Route>
  )
}

function RedirectToFeed(props)
{
  let Component = props.comp;
  let cUser = useContext(AuthContext);

  return(
    <Route
     {...props}
     render = {
      (props) => {
        return cUser != null?<Redirect {...props} to ="/feed"></Redirect>:
        <Component {...props}></Component>
      }
     } 
     ></Route>
    
  )
}


export default App;
