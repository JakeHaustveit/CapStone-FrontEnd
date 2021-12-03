import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { FloatingLabel } from 'react-bootstrap/';
import Button from 'react-bootstrap/Button';
import useForm from '../UseForm/UseForm';
import { useNavigate } from 'react-router-dom';

const UserRegistration = (props) => {

    const {formValues, handleChange, handleSubmit } = useForm(Register);
    
    let navigate= useNavigate();

    async function Register() { 
        let response = await axios.post('http://127.0.0.1:8000/api/auth/register/', formValues);
        console.log(response.data)
        navigate("../Login")
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
                  <FloatingLabel>Email</FloatingLabel>
                  <Form.Control type="email" name="email" placeholder="name@example.com" onChange= {handleChange} required= {true}/>

                </Form.Group>

                <Form.Group  controlId="formBasicEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" name="first_name" placeholder="Enter First Name" onChange= {handleChange} required= {true}/>

                </Form.Group>

                <Form.Group  controlId="formBasicEmail">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" name="last_name" placeholder="Enter Last Name" onChange= {handleChange} required= {true}/>

                </Form.Group>

                <Form.Group  controlId="formBasicEmail">
                  <Form.Label>Middle Name</Form.Label>
                  <Form.Control type="text" name="middle_name" placeholder="Enter Middle Name" onChange= {handleChange} required= {true}/>

                </Form.Group>

                <Button variant="primary" type="submit" >
                  Submit
                </Button>
            </Form>
        </div>
    );
}

export default UserRegistration;