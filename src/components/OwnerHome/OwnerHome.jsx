import React from "react";
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useForm from '../UseForm/UseForm';
import { useNavigate } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './OwnerHome.css'
import { Col, Row, Container } from "react-bootstrap";
import useForm2 from "../UseForm/UseForm2";

const OwnerHome = () => {

    const {formValues, handleChange, handleSubmit } = useForm(OwnerAddJobsFormSubmit);
    const {formValues2, handleChange2, handleSubmit2} = useForm2(OwnerEmployeeLaborCodeFormSubmit);
    let navigate= useNavigate();


    async function OwnerAddJobsFormSubmit() { 
        const jwt = localStorage.getItem('token');
        
        let response = await axios.post('http://127.0.0.1:8000/owners/registerjobs/', formValues, { headers: {Authorization: 'Bearer ' + jwt}});
        console.log(response.data)
        navigate("../Owner/Home")
    }


    async function OwnerEmployeeLaborCodeFormSubmit() { 
        const jwt = localStorage.getItem('token');
        
        let response = await axios.post('http://127.0.0.1:8000/owners/registerjobs/', formValues2, { headers: {Authorization: 'Bearer ' + jwt}});
        console.log(response.data)
        navigate("../Owner/Home")
    }




    return(
    <div className="Form">
            <Container className="Container">
                <Col md={3} className="Container">
                    <h3> Add Jobs Here </h3>                    
                    <Form onSubmit= {handleSubmit2}>

                        <Form.Group >
                            <FloatingLabel label="Job Name" className="mb-3" controlId="floatingTextarea">
                                <Form.Control type="text" name="job_name" placeholder="Enter Job Name Here" onChange= {handleChange} required= {true}/>
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group >
                            <FloatingLabel label="Job Site" className="mb-3" controlId="floatingTextarea">
                            <Form.Control type="text" name="job_site" placeholder="Enter Job Site Here" onChange= {handleChange} required= {true}/>
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group >
                            <FloatingLabel label="Business Name" className="mb-3" controlId="floatingTextarea">
                                <Form.Control type="text" name="business_name" placeholder="name@example.com" onChange= {handleChange} required= {true}/>
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group >
                            <FloatingLabel label="Start Date" className="mb-3" controlId="floatingTextarea">
                                <Form.Control type="date" name="job_end_date"  onChange= {handleChange} required= {true}/>
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="floatingTextarea">
                            <FloatingLabel label="Job End Date">
                                <Form.Control type="date" name="job_end_date" onChange= {handleChange} required= {true}/>
                            </FloatingLabel>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>

                    </Form>
                </Col>
                <Col className="Container">
                    <Form onSubmit= {handleSubmit2}>
                        <Form.Group >
                            <FloatingLabel label="Employee Roles" className="mb-3" controlId="floatingTextarea">
                                <Form.Control type="text" name="labor_code" placeholder="Add Employee Roles Here" onChange= {handleChange2} required= {true}/>
                            </FloatingLabel>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                </Col>
            </Container>
            

        </div>
        
    );
}
 
export default OwnerHome;