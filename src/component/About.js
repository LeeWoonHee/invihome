import "./about.css"; 
import Me from "./Me"

const About = () =>{
    return(
        <div className="innerBox">
            <div className="container">
                <h2>About me</h2>
                <div className="flexWrap">
                    <div className="aboutWrap">
                        <Me me={mes} />
                    </div>
                    <div className="imgWrap">
                            <img src="images/aboutbg.jpg" />
                    </div>
                </div>
            </div>
        </div>
    )
}
const mes=[
    {id:1,title:"Name",content:"LEE WOONHEE",icon:"images/icon-name.png"},
    {id:2,title:"Tel",content:"010-7157-6399",icon:"images/icon-phone.svg"},
    {id:3,title:"Add",content:"서울특별시 금천구 독산로 102길 87",icon:"images/icon-home.png"},
    {id:4,title:"E-mail",content:"zero1158@naver.com",icon:"./images/icon-email.svg"},
    {id:5,title:"방송정보국제교육원",content:"2022.03.24 ~ 2022.09.05",icon:"images/cap.svg"}
]
export default About;