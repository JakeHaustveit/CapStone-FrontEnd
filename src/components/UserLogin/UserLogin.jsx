import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useForm from '../UseForm/UseForm';
import { useNavigate } from 'react-router-dom';


const UserLogin = (props) => {

    const {formValues, handleChange, handleSubmit } = useForm(logIn);
    
    let navigate= useNavigate();

    async function logIn() { 
        let response = await axios.post('http://127.0.0.1:8000/api/auth/login/', formValues);
        console.log(response.data)
        localStorage.setItem('token', response.data.access)
        navigate("../RegisterRole")
    }  

   

    return (
        <div>
        <Form onSubmit= {handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control type="username" name="username" placeholder="Enter UserName" onChange= {handleChange} required= {true}/>

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password" placeholder="Password" onChange= {handleChange} required= {true}/>
                </Form.Group>

                <Button variant="primary" type="submit" >
                  Submit
                </Button>
            </Form>
        </div>
    );
}

export default UserLogin;