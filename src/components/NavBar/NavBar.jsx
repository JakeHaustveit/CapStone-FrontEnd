import React from "react";
import { Link } from 'react-router-dom'
import "./NavBar.css"


const NavBar = () => {
    

    return(
        <div>                
            <nav className='topNav' >
            <Link to="/" >Home</Link>                
            <Link to="/Registration">User Registration</Link>
            <Link to="/Login" >Login Here</Link>            
            </nav>
        </div>
    )
}

export default NavBar