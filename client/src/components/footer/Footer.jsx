import { faCopyright, faHouseUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useNavigate } from "react-router-dom"
import "./footer.css"

// Assets
import logo from "../../Assets/logo.png"

const Footer=()=>{
    
    return(
        <div className="footer">
            <div className="fLists">
                <Link to="/help">
                <ul className="fList">
                    <li className="fListItem">Help</li>
                </ul>
                </Link>
                <Link to="/about">
                <ul className="fList">
                    <li  className="fListItem">About</li>
                </ul>
                </Link>
                <Link to="/terms">
                <ul className="fList">
                    <li  className="fListItem">Terms&Conditions</li>
                </ul>
                </Link>
                <Link to="/contact">
                <ul className="fList">
                    <li  className="fListItem">ContactUs</li>
                </ul>
                </Link>
            </div>
            <div className="fText">
                
            <Link to="/" style={{color:"inherit",textDecoration:"none"}}>
                
                <img className="logo1" src={logo} alt="" />
                
                
                </Link> <span className="sp123"> © Copyright 2022. All Rights Reserved. Urban Oasis, Inc.</span>
                <br />

            </div>

            
            <br />
            <br />
            
        </div>

    )
}
export default Footer