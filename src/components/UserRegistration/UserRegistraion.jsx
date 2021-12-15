import React, {useState} from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import useForm from '../UseForm/UseForm';
import { useNavigate } from 'react-router-dom';
import { Col, Row, Container } from "react-bootstrap";

const UserRegistration = (props) => {

    const {formValues, handleChange, handleSubmit } = useForm(Register);
    const [formPage, setFormPage] = useState(2);
    


    const submitForm =(event, formPage)=> {
      setFormPage(formPage)
      handleChange(event)      
      console.log(formPage)
    }
        
    let navigate= useNavigate();

  

    async function Register() { 
      console.log(formPage)
      if(formPage === 2){
        let response = await axios.post('http://127.0.0.1:8000/api/auth/register/', formValues);
        
        navigate("../Login")
      }
      else{
        let response = await axios.post('http://127.0.0.1:8000/api/auth/register/employee/', formValues);
        
        navigate("../Login")

      }
        
        
    } 
    // Owner Registration Form
    function renderOwnerRegistration(){
      return (
          <div>
            <Container>
              <Row>
            <Col md={2}>
                </Col>
              <Col md={8}>
                
              <Form onSubmit= {handleSubmit}>
                  <Form.Group >
                    <FloatingLabel label="User Name" className="mb-3" controlId="floatingTextarea">
                    <Form.Control type="username" name="username" onChange= {handleChange} required= {true}/>
                    </FloatingLabel>

                  </Form.Group>

                  <Form.Group className="mb-3" controlId="floatingPassword">
                    <FloatingLabel label="">
                    <Form.Control type="password" name="password" onChange= {handleChange} required= {true}/>
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group >
                    <FloatingLabel label="Email" className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name="email" onChange= {handleChange} required= {true}/>
                    </FloatingLabel>

                  </Form.Group>

                  <Form.Group className="mb-3" controlId="floatingTextarea">
                    <FloatingLabel label="First Name">
                    <Form.Control type="text" name="first_name" onChange= {handleChange} required= {true}/>
                    </FloatingLabel>

                  </Form.Group>

                  <Form.Group className="mb-3" controlId="floatingTextarea">
                    <FloatingLabel label="Last Name">
                    <Form.Control type="text" name="last_name" onChange= {handleChange} required= {true}/>
                    </FloatingLabel>

                  </Form.Group>

                  <Form.Group className="mb-3" controlId="floatingTextarea">
                    <FloatingLabel label="Middle Name">
                    <Form.Control type="text" name="middle_name" placeholder="Enter Middle Name" onChange= {handleChange} required= {true}/>
                    </FloatingLabel>

                  </Form.Group>

                  <Form.Group className="mb-3" controlId="floatingTextarea">
                    <FloatingLabel label="Business Name">
                    <Form.Control type="text" name="business_name" placeholder="Enter Business Name" onChange= {handleChange} required= {true}/>
                    </FloatingLabel>

                  </Form.Group>

                  <Form.Group>
                    <FloatingLabel controlId="floatingSelect" label="Select Status" >
                      <Form.Select  type="test" name="is_staff" onChange= {(event) => submitForm(event, 1)} required= {true}>
                        <option>Select Job Code Here</option>
                        <option value="False">Owner</option>
                        <option value="True">Employee</option>
                      </Form.Select>
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
      //Employee Registration Form
    function RenderEmployeeRegistration(){
      return (
        <div>
          <Container>
          <Row>
            <Col md={2}>
              </Col>
              <Col md={8}>
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

                <Form.Group className="mb-3" controlId="floatingTextarea">
                  <FloatingLabel label="Business Name of Owner">
                  <Form.Control type="text" name="owner_id" placeholder="Enter Business Name" onChange= {handleChange} required= {true}/>
                  </FloatingLabel>

                </Form.Group>

                <Form.Group>
                  <FloatingLabel controlId="floatingSelect" label="Select Status" >
                    <Form.Select  type="test" name="is_staff" onChange= {(event) => submitForm(event, 2)} required= {true}>
                      <option>Select Job Code Here</option>
                      <option value="False"  >Owner</option>
                      <option value="True">Employee</option>
                    </Form.Select>
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

    return(
      <React.Fragment>
        <div>
          
            {formPage === 2 ? renderOwnerRegistration() : RenderEmployeeRegistration()}
          
        </div>
      </React.Fragment>
      
    )


}

export default UserRegistration;