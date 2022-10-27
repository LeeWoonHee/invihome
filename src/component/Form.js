import "./form.css"
const Form = ({value,onaChange,onaCreate}) =>{
    return(
            <div className="inputForm">
                <input type="text" value={value} onChange={onaChange}/>
                <button onClick={onaCreate}>ADD</button> 
            </div>
    )
}
export default Form;