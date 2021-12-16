import React from "react";
import { Link } from 'react-router-dom'
import "./NavBar.css"


const NavBar = (props) => {
    

    return(
        <div>                
            <nav className='topNav' >
            <Link to="/" >Home</Link>                
            <Link to="/Registration">Register</Link>
            <Link to="/Login" >Login</Link>
            <Link to="/Calendar" > Calendar </Link>
            <Link to="/" onClick={() =>{props.logOutUser() }}>Logout</Link>          
            </nav>
        </div>
    )
}

export default NavBar