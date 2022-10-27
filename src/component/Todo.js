import {Component} from "react";
import Form from "./Form"
import TodoListTemplate from "./TodoListTemplate";
import TodoItemList from "./TodoItemList";

class Todo extends Component {
  //목록 체크변수
  id=3;
  state = {
    input:"",
    todos:[
      {id:0,text:"리액트",checked:false},
      {id:1,text:"이력서",checked:false},
      {id:2,text:"운동",checked:false}
    ]

  }
  //input 내용을 value 로 넣는 함수
  handleChange = (e) =>{
    this.setState({
      input:e.target.value
    })
  }
  //입력 데이터 todos 넣는 함수
  handleCreate = (e) =>{
    const {input,todos}=this.state;
    this.setState({
      input:"",
      todos:todos.concat({
        id:this.id++,
        text:input,
        checked:false
      })
    })
  }
  handleRemove = (id) => {
    const{todos} = this.state;
    this.setState({
      todos : todos.filter(todos =>todos.id !== id)
    })
  }
  handleToggle = (id) => {
    const{todos}=this.state;
    //클릭한 순서
    const index = todos.findIndex(todo => todo.id === id);
    console.log(index);
    const selected= todos[index];
    const copyTodos = [...todos];
    console.log(copyTodos);
    copyTodos[index]={
      ...selected,
      checked:!selected.checked
    }
    
    this.setState({
      todos:copyTodos
    })
  }
  render(){
    const {input,todos}=this.state
    return(
      <div className="innerBox">
      <div className="container">
        <h2>TO DO LIST</h2>
    <div className="App">
        <TodoListTemplate sendForm={<Form value={input} 
        onaChange={this.handleChange} onaCreate={this.handleCreate}/>}>
        <TodoItemList todos={todos} onbRemove={this.handleRemove}
        onbToggle={this.handleToggle} />
        </TodoListTemplate>
    </div>
    </div>
    </div>
    )
  }
}
export default Todo;
