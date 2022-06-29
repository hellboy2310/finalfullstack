import { Component } from "react";

class Banner2 extends Component{

render(){
    return(
        <div className="card" >
        <img style={{height:"130vh",width:'100vw'}} src="https://www.ode.systems/media/ubiqu2/files/1/49/IG_BeyondNetflix_No_Fucks_Given.png" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a  className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    )
}

}

export default Banner2



// "https://kbimages1-a.akamaihd.net/ddf8d53d-7df5-4560-8fbd-43915f4f6a03/1200/1200/False/rich-dad-poor-dad-24.jpg"
