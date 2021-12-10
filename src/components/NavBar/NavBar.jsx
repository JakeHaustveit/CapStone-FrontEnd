import React from "react";
import { Link } from 'react-router-dom'
import "./NavBar.css"


const NavBar = (props) => {
    

    return(
        <div>                
            <nav className='topNav' >
            <Link to="/" >Home</Link>                
            <Link to="/Registration">User Registration</Link>
            <Link to="/Login" >Login Here</Link>
            <Link to="/Owner/Home" >Owner Home </Link>
            <Link to="/Employee/Home" > Employee Home</Link>
            <Link to="/Calendar" > Calendar </Link>
            <Link to="/" onClick={() =>{props.logOutUser() }}>Logout Here</Link>          
            </nav>
        </div>
    )
}

export default NavBar