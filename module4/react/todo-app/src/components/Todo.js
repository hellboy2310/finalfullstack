import { Component } from "react";


class Todo extends Component{
    constructor(){
        super();
        this.state = {
            tasks:[],
            currTask:""
        }
    }
    handleChange = (e) =>{
        this.setState({
            currTask:e.target.value
        })
    }
    handleAddTask = () =>{
        this.setState({
            tasks:[...this.state.tasks,{task:this.state.currTask,id:this.state.tasks.length+1}],
            currTask:""
        })
    }
    
    
    hadleDelete = (id) => {
        let narr = this.state.tasks.filter((taskObj) =>{
            return taskObj.id !=id;
        })
        this.setState({
            tasks:[...narr]
        })
    }



    render(){
        return(
            <div>
                <input type = "text" value = {this.state.currTask} onChange ={this.handleChange}/>
                <button onClick = {this.handleAddTask}>Add task</button>
            
                    <ul>
                      {/* here loop does not work so we need to loop through map done below */}
                        {this.state.tasks.map((taskObj)=>(
                            <li key = {taskObj.id}>
                                <p>{taskObj.task}</p>
                                <button onClick={()=>this.hadleDelete(taskObj.id)}>Delete</button>
                            </li>
                        ))}
                    </ul>

            </div>

            )
    }
}
export default Todo;