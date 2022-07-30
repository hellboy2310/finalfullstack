import LandingPage from "./components/landingpage";
import Header from './components/header';
import About from "./components/about";
import Register from "./components/Register";
import Signin from "./components/signin";
import Template from "./components/template";
import {Route, Switch} from "react-router-dom"


function App() {
  return (
    <>
    <Header/>
    <Switch>
    <Route path = "/" exact>
      <LandingPage></LandingPage>
    </Route>
    <Route path = "/template" exact>
      <Template></Template>
    </Route>
    <Route path = "/about">
      <About></About>
    </Route>
    <Route path = "/register" exact>
      <Register></Register>
    </Route>
    <Route path = "signin" exact>
      <Signin></Signin>
    </Route>
    </Switch>
  </>
  );
}

export default App;
