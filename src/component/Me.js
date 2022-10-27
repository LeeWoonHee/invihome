const me = (props) => {
    const meList = props.me;
    const meSet = meList.map((f) =>
        <div>
            <div className="imgBox"><img src={f.icon}/></div>
            <div className="textBox">
                <strong>{f.title}</strong>
                <p>{f.content}</p>
            </div>
        </div>
    )
    return (
        <div className="box">
            {meSet}
        </div>
    )
}
export default me;