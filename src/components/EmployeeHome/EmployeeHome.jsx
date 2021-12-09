import React from "react";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import useForm from '../UseForm/UseForm';
import { Col, Row, Container } from "react-bootstrap";




const EmployeeHome = () => {

    const {formValues, handleChange, handleSubmit } = useForm();

    return (  
        <div>
            <Container>
                <Col md={3}>
                    <h3>Time Card</h3>
                    <Form>
                        <Form.Group >
                            <FloatingLabel label="Day Worked" className="mb-3" controlId="floatingTextarea">
                            <Form.Control type="date" name="date_worked" placeholder="Enter User Name Here" onChange= {handleChange} required= {true}/>
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="floatingPassword">
                            <FloatingLabel label="Start Time">
                            <Form.Control type="time" name="start_time" placeholder="Password" onChange= {handleChange} required= {true}/>
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group >
                            <FloatingLabel label="Stop Time" className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="time" name="end_time" placeholder="name@example.com" onChange= {handleChange} required= {true}/>
                            </FloatingLabel>
                        </Form.Group>
                    </Form>
                </Col>
            </Container>
            

        </div>
        
    );
}
 
export default EmployeeHome;