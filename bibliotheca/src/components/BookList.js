import { Component } from "react";
import { movies } from "../moviedata";



class BookList extends Component{
render(){
    let moviesArr = movies.results;
    
    return(
        <>
        <div className="text-center">
            <h3><strong>Trending</strong></h3>
        </div>
        <div className="movies-list">
        {moviesArr.map((movieEle)=>(
            <div className="card movie-card">
            <img className="card-img-top" src="https://kbimages1-a.akamaihd.net/ddf8d53d-7df5-4560-8fbd-43915f4f6a03/1200/1200/False/rich-dad-poor-dad-24.jpg " style={{height:"40vh",width:'20vw'}} alt="Card image cap"/>
           <div className="card-body">
             <h5 className="card-title">{movieEle.original_title}</h5>
           </div>
         </div>
        ))}

        </div>
                </>
    )
}
}
export default BookList;