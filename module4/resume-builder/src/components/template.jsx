
import "./template.css"
import skin1 from "./static/images/skin1.svg"
import skin2 from "./static/images/skin2.svg"
import skin3 from "./static/images/skin3.svg"
 
const Template = () =>{
    return(
        <div className="templates">
            <div className="templates-intro">
                <h1>Select a resume</h1>
                <p>you can edit and change it later!</p>
            </div>
            <div className="templates-style">
                <div className="template">
                    <img src={skin1} alt="" />
                    <button className="template-btn">Use template</button>
                </div>
                <div className = "template">
                <img src={skin2} alt="" />
            </div>
            <div className = "template">
                <img src={skin3} alt="" />
            </div>
        </div>
   </div>
    )
}

export default Template