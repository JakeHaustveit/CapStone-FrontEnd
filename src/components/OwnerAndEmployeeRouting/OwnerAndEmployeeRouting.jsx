import React from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const OwnerAndEmployeeRouting = () => {

    let navigate = useNavigate()

    return (  
        <div>
            <h3>Thank you for Registering</h3>
                <Button  onClick={()=> navigate("../Owner/Registration")}>Click Here to Register and an Owner</Button>
                <Button onClick={()=> navigate("../Employee/Registration")}>Click Here to Register and an Employee</Button>
            <h3>If already Registered, sign in Here</h3>

        </div>
    

    );
}
 
export default OwnerAndEmployeeRouting;