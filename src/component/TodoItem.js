import { Component } from "react"
import "./Todoitem.css";

class TodoItem extends Component{
    render(){
        const {text,id,checked,onaRemove,onaToggle}=this.props;
        return(
            <div className="todoItem">
                <div className="remove" onClick={()=>{
                    onaRemove(id)
                }}>X</div>
                <div className={checked ? "checked":""} onClick={()=>{
                    onaToggle(id)
                }}>{text}</div>
            </div>
        )
    }
}
export default TodoItem;