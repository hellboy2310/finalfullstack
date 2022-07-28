import "./preview.css";


import {useParams} from "react-router"
import {useSelector} from "react-redux"


let Preview = () =>{

    let {id} = useParams();
    let state = useSelector((state)=>state);
    let reqObj = state[id];
    return(
        <>
        <div className="preview-container">
            <div className="preview-img-container">
                <img src= {reqObj.img} alt="" />
            </div>
        <div className="preview-listing">
            <h2>{reqObj.name}</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore voluptates alias suscipit autem ducimus, architecto ipsa minus, voluptas atque delectus sunt rerum veritatis magnam porro cumque incidunt! Distinctio, tempora maxime.</p>
        <button>Add to Cart</button>
        </div>
        
        </div>
        </>
    )
}

export default Preview