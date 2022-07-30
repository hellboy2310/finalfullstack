import "./about.css"
import about from "./static/images/aboutus.jpg"

const About = () =>{
    return(
        <div className="about">
            <div className="left-about">
                <p>Do you have any question?? connect with us</p>
                <h2>contact@pepcoding.com</h2>
                <p>we are here to answer any questions</p>
            </div>
            <div className="right-about">
                <img src={about} alt="" />
            </div>
        </div>
    )
}

export default About