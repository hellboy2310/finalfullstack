import { Component } from 'react';

class Nav extends Component{
    render(){
        return (
            <div style={{display:"flex",padding:"0.5rem",cursor:"pointer"}}>
            <h1  style={{marginTop:"1.5rem",marginLeft:"1rem",color:"brown"}}>BookZone</h1>
            <h2 style={{marginTop:"2rem",marginLeft:"1rem",color:"brown"}}>Favourites</h2>
        
            </div>
        )
        
        }
}
export default Nav;