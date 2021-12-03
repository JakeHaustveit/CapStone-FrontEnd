import React from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const OwnerAndEmployeeRouting = () => {

    let navigate = useNavigate()

    return (  
        <div>
            <h3>Thank you for Registering</h3>
                <Button  onClick={()=> navigate("../OwnerRegistration")}>Click Here to Register and an Owner</Button>
                <Button onClick={()=> navigate("../EmployeeRegistration")}>Click Here to Register and an Employee</Button>

        </div>
    

    );
}
 
export default OwnerAndEmployeeRouting;