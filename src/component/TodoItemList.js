import { Component } from "react";
import TodoItem from "./TodoItem";

class TodoItemList extends Component{
    render(){
        const {todos,onbRemove,onbToggle} = this.props;
        const todoList=todos.map(({id,text,checked}) => (
            <TodoItem id={id} text={text} checked={checked} onaRemove={onbRemove} onaToggle={onbToggle}/>
            )
        )
        return(
            <div>
                {todoList}
            </div>
        )
    }
}

export default TodoItemList;