import React from "react";
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import useForm from '../UseForm/UseForm';
import { useNavigate } from 'react-router-dom';


const OwnerRegister = (props) => {

    const {formValues, handleChange, handleSubmit } = useForm(RegisterAsAnOwner);
    
    let navigate= useNavigate();
    //Add Bearer Token For Authentication
    async function RegisterAsAnOwner() { 
        let response = await axios.post('http://127.0.0.1:8000/owners/', formValues);
        console.log(response.data)
        navigate("../Owner/Login")
    }  

   

    return (
        <div>
        <Form onSubmit= {handleSubmit}>

                <Form.Group  >
                  <FloatingLabel label="User Name" className="mb-3" controlId="floatingTextarea">
                  <Form.Control type="username" name="username" placeholder="Enter User Name Here" onChange= {handleChange} required= {true}/>
                  </FloatingLabel>
                </Form.Group>

                <Form.Group  >
                  <FloatingLabel label="Password" className="mb-3" controlId="floatingPassword">
                  <Form.Control type="password" name="password" placeholder="Password" onChange= {handleChange} required= {true}/>
                  </FloatingLabel>
                </Form.Group>  

                <Form.Group  >
                  <FloatingLabel label="First Name" className="mb-3" controlId="floatingTextarea">
                  <Form.Control type="text" name="first_name" placeholder="Enter First Name" onChange= {handleChange} required= {true}/>
                  </FloatingLabel>
                </Form.Group>

                <Form.Group >
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

export default OwnerRegister;