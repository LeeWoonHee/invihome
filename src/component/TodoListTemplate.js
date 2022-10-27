import "./TodoListTemplate.css"

const TodoListTemplate =({sendForm,children}) =>{
    return(
        <div className="todoWrap">
            <h1>TODAY TODOS</h1>
            <section className="formWrap">
                {sendForm}
            </section>
            <section className="todoLists">{children}</section>
        </div>
    )
}
export default TodoListTemplate;