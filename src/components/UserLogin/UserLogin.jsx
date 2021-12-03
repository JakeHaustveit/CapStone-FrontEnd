import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useForm from '../UseForm/UseForm';
import { useNavigate } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


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

                <Button variant="primary" type="submit" >
                  Submit
                </Button>
            </Form>
        </div>
    );
}

export default UserLogin;