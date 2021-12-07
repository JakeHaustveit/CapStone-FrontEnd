import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
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
                <Form.Group >
                  <FloatingLabel label="User Name" className="mb-3" controlId="floatingTextarea">
                  <Form.Control type="username" name="username" placeholder="Enter User Name Here" onChange= {handleChange} required= {true}/>
                  </FloatingLabel>

                </Form.Group>

                <Form.Group className="mb-3" controlId="floatingPassword">
                  <FloatingLabel label="">Password
                  <Form.Control type="password" name="password" placeholder="Password" onChange= {handleChange} required= {true}/>
                  </FloatingLabel>
                </Form.Group>

                <Form.Group >
                  <FloatingLabel label="Email" className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" name="email" placeholder="name@example.com" onChange= {handleChange} required= {true}/>
                  </FloatingLabel>

                </Form.Group>

                <Form.Group className="mb-3" controlId="floatingTextarea">
                  <FloatingLabel label="First Name">
                  <Form.Control type="text" name="first_name" placeholder="Enter First Name" onChange= {handleChange} required= {true}/>
                  </FloatingLabel>

                </Form.Group>

                <Form.Group className="mb-3" controlId="floatingTextarea">
                  <FloatingLabel label="Last Name">
                  <Form.Control type="text" name="last_name" placeholder="Enter Last Name" onChange= {handleChange} required= {true}/>
                  </FloatingLabel>

                </Form.Group>

                <Form.Group className="mb-3" controlId="floatingTextarea">
                  <FloatingLabel label="Middle Name">
                  <Form.Control type="text" name="middle_name" placeholder="Enter Middle Name" onChange= {handleChange} required= {true}/>
                  </FloatingLabel>

                </Form.Group>

                <Button variant="primary" type="submit" >
                  Submit
                </Button>
            </Form>
        </div>
    );
}

export default UserRegistration;