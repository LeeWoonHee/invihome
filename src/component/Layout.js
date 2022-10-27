import {Link,Outlet} from "react-router-dom"
import Logo from "../images/melogo.png"

const Layout =() =>{
    return(
        <div className="Wrap">
            <header>
                <div className="innerBox">
                    <h1 className="logo">
                        <Link to="/">
                            <img src={Logo}/><p className="txt">Woon Hee</p>
                        </Link>
                    </h1>
                    <ul id="nav">
                        <li><Link to="/about">About me</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="todo">Todo</Link></li>
                        <li><Link to="skill">Skills</Link></li>
                    </ul>
                </div>
            </header>
            <Outlet />
        </div>
    )
}
export default Layout;