import React from "react";
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import useForm from '../UseForm/UseForm';
import { useNavigate } from 'react-router-dom';
import { Col, Row, Container } from "react-bootstrap";



const OwnerRegister = (props) => {

    const {formValues, handleChange, handleSubmit } = useForm(RegisterAsAnOwner);
    
    let navigate= useNavigate();
    
    async function RegisterAsAnOwner() { 
      const jwt = localStorage.getItem('token');
      
        let response = await axios.post('http://127.0.0.1:8000/owners/', formValues, { headers: {Authorization: 'Bearer ' + jwt}});
        console.log(response.data)
        navigate("../Owner/Login")
    }  

   

    return (
        <div>
          <Container>
        <Form onSubmit= {handleSubmit}>

                <Form.Group  >
                  <FloatingLabel label="Business Name" className="mb-3" controlId="floatingTextarea">
                    <Form.Control type="text" name="business_name" placeholder="Enter Business Name Here" onChange= {handleChange} required= {true}/>
                  </FloatingLabel>
                </Form.Group>

                <Form.Group >
                  <FloatingLabel className="mb-3" label="User Name" controlId="floatingTextarea">
                  <Form.Control type="username" name="username" placeholder="Enter UserName" onChange= {handleChange} required= {true}/>
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
                
                <Button variant="primary" type="submit">
                  Submit
                </Button>
            </Form>
            </Container>
        </div>
    );
}

export default OwnerRegister;