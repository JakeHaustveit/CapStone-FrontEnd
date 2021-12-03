import React from "react";
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { FloatingLabel } from 'react-bootstrap/';
import Button from 'react-bootstrap/Button';
import useForm from '../UseForm/UseForm';
import { useNavigate } from 'react-router-dom';


const EmployeeLogin = (props) => {

    const {formValues, handleChange, handleSubmit } = useForm(EmployeeRegister);
    
    let navigate= useNavigate();

    async function EmployeeRegister() { 
        let response = await axios.post('http://127.0.0.1:8000/api/auth/register/', formValues);
        console.log(response.data)
        navigate("../Employee/Login")
    }  

   

    return (
        <div>
        <Form onSubmit= {handleSubmit}>
            
                <Form.Group  controlId="formBasicEmail">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control type="username" name="username" placeholder="Enter User Name Here" onChange= {handleChange} required= {true}/>
                </Form.Group>

                <Form.Group  controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password" placeholder="Password" onChange= {handleChange} required= {true}/>
                </Form.Group>  

                <Form.Group  controlId="formBasicEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" name="first_name" placeholder="Enter First Name" onChange= {handleChange} required= {true}/>
                </Form.Group>

                <Form.Group  controlId="formBasicEmail">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" name="last_name" placeholder="Enter Last Name" onChange= {handleChange} required= {true}/>
                </Form.Group>

                

                <Button variant="primary" type="submit" >
                  Submit
                </Button>
            </Form>
        </div>
    );
}

export default EmployeeLogin;