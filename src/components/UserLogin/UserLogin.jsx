import React, {useState} from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useForm from '../UseForm/UseForm';
import { useNavigate } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './UserLogin.css'
import { Col, Row, Container } from "react-bootstrap";


const UserLogin = (props) => {

    const {formValues, handleChange, handleSubmit } = useForm(logIn);
    
    
    let navigate= useNavigate();

    async function logIn() { 
        let response = await axios.post('http://127.0.0.1:8000/api/auth/login/', formValues);    
        localStorage.setItem('token', response.data.access)
        let username= formValues.username        
        verifyUserLoginRedirect(username)
    }
    
    async function verifyUserLoginRedirect(username) {
      let response = await axios.get(`http://127.0.0.1:8000/api/auth/userdata/${username}/`)
      console.log(response.data)
      props.userData(response.data)
      if(response.data.is_staff === true){
        navigate("../Owner/Home")
      }
      else{
        navigate("../Employee/Home")
      }
    }

   

    return (
        <div  className="Form">
          <Container>
            <Row>
            <Col md={2}>
                </Col>
              <Col md={8}>
              <h3> Log in Here </h3>
        <Form  onSubmit= {handleSubmit}>
                <Form.Group  >
                  <FloatingLabel className="mb-3"  label="User Name" controlId="floatingTextarea">
                  <Form.Control type="username" name="username"  onChange= {handleChange} required= {true}/>
                  </FloatingLabel>

                </Form.Group>

                <Form.Group >
                  <FloatingLabel className="mb-3" label="Password" controlId="floatingPassword">
                  <Form.Control type="password" name="password" onChange= {handleChange} required= {true}/>
                  </FloatingLabel>
                </Form.Group>

                <Button variant="primary" type="submit" >
                  Submit
                </Button>
            </Form>
            </Col>
            </Row>
            </Container>
        </div>
    );
}

export default UserLogin;