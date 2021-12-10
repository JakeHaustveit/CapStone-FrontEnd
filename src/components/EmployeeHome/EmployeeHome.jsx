import React from "react";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import useForm from '../UseForm/UseForm';
import { Col, Row, Container } from "react-bootstrap";
import axios from "axios";




const EmployeeHome = (props) => {

    const {formValues, handleChange, handleSubmit } = useForm(EmployeePayStubSubmit);


    async function EmployeePayStubSubmit() {

        const jwt = localStorage.getItem('token');

        let response = await axios.post("http://127.0.0.1:8000/employees/addwork/", formValues, { headers: {Authorization: 'Bearer ' + jwt}})
        console.log(response.data)
    }



    return ( 
        
        <div>
            <h3> Welcome, {props.loggedInUser.first_name} {props.loggedInUser.last_name}</h3> 
            <Container>
                <Col md={3}>
                    <Row>
                    <h3>Time Card</h3>
                    <Form onSubmit= {handleSubmit}>
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
                    <Form.Group>
                        <FloatingLabel controlId="floatingSelect" label="Select Status" >
                            <Form.Select  type="test" name="is_staff" onChange= {handleChange} required= {true}>
                                <option>Select Job Code Here</option>
                                {props.employeeJobs.map((job) =>{
                                   return(
                                       <option value={job.labor_code}> {job.labor_code} </option>
                                    )
                                   })
                               }
                              
                                
                                
                                
                                
                            </Form.Select>
                        </FloatingLabel>                  
                    </Form.Group>

                        <Button variant="primary" type="submit" >
                            Submit
                        </Button>

                    </Form>
                    
                    </Row>
                    <Row>
                        <h3> Request Time Off Here</h3>
                    <Form onSubmit= {handleSubmit}>
                    <Form.Group >
                        <FloatingLabel label="User Name" className="mb-3" controlId="floatingTextarea">
                        <Form.Control type="text" name="username" placeholder="Enter User Name Here" onChange= {handleChange} required= {true}/>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <FloatingLabel label="Start Date">
                        <Form.Control type="date" name="vacation_start_date"  onChange= {handleChange} required= {true}/>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group >
                        <FloatingLabel label="End Date" className="mb-3" >
                        <Form.Control type="date" name="vacation_end_date" onChange= {handleChange} required= {true}/>
                        </FloatingLabel>
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                </Form>

                    </Row>
                </Col>
                
            </Container>
            

        </div>
        
    );
}
 
export default EmployeeHome;