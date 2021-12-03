import React from "react";
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { FloatingLabel } from 'react-bootstrap/';
import Button from 'react-bootstrap/Button';
import useForm from '../UseForm/UseForm';
import { useNavigate } from 'react-router-dom';


const EmployeeRegister = (props) => {

    const {formValues, handleChange, handleSubmit } = useForm(RegisterAsAnEmployee);
    
    let navigate= useNavigate();
    //Add Bearer Token For Authentication
    async function RegisterAsAnEmployee() { 
        let response = await axios.post('http://127.0.0.1:8000/employees/', formValues);
        console.log(response.data)
        navigate("../Employee/Login")
    }  

   

    return (
        <div>
        <Form onSubmit= {handleSubmit}>
            
                <Form.Group >
                  <FloatingLabel className="mb-3" label="User Name" controlId="floatingTextarea">
                  <Form.Control type="username" name="username" placeholder="Enter UserName" onChange= {handleChange} required= {true}/>
                  </FloatingLabel>
                </Form.Group> 

                <Form.Group >
                  <FloatingLabel className="mb-3" label="Password" controlId="floatingPassword">
                  <Form.Control type="password" name="password" placeholder="Password" onChange= {handleChange} required= {true}/>
                  </FloatingLabel>
                </Form.Group>  

                <Form.Group  controlId="formBasicEmail">
                <FloatingLabel label="First Name" className="mb-3" controlId="floatingTextarea">
                  <Form.Control type="text" name="first_name" placeholder="Enter First Name" onChange= {handleChange} required= {true}/>
                  </FloatingLabel>
                </Form.Group>

                <Form.Group  controlId="formBasicEmail">
                <FloatingLabel label="Last Name" className="mb-3" controlId="floatingTextarea">
                  <Form.Control type="text" name="last_name" placeholder="Enter Last Name" onChange= {handleChange} required= {true}/>
                  </FloatingLabel>
                </Form.Group>

                

                <Button variant="primary" type="submit" >
                  Submit
                </Button>
            </Form>
        </div>
    );
}

export default EmployeeRegister;