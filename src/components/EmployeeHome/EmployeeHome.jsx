import React from "react";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import useForm from '../UseForm/UseForm';
import useForm2 from "../UseForm/UseForm2";
import { Col, Row, Container } from "react-bootstrap";
import axios from "axios";





const EmployeeHome = (props) => {

    const {formValues, handleChange, handleSubmit } = useForm(EmployeePayStubSubmit);
    const {formValues2, handleChange2, handleSubmit2} = useForm2(EmployeeVacation);

    //add username to formValues without using form
    async function EmployeePayStubSubmit() {

        const jwt = localStorage.getItem('token');

        let response = await axios.post("http://127.0.0.1:8000/employees/addwork/", formValues, { headers: {Authorization: 'Bearer ' + jwt}})
        console.log(response.data)
    }

    async function EmployeeVacation() {

        const jwt = localStorage.getItem('token');

        let response = await axios.post("http://127.0.0.1:8000/employees/home/", formValues2, { headers: {Authorization: 'Bearer ' + jwt}})
        console.log(response.data)

    }



    return ( 
        
        <div className = "center">
            <h3> Welcome, {props.loggedInUser.first_name} {props.loggedInUser.last_name}</h3> 
            <Container>
            <Row>
                <Col md={2}>
                </Col>
                <Col md={4}>
                    
                    <h4>Time Card</h4>
                    <Form onSubmit= {handleSubmit}>
                    <Form.Group >
                        <FloatingLabel label="User Name" className="mb-3" controlId="floatingTextarea">
                        <Form.Control type="text" name="username"  onChange= {handleChange} required= {true}/>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group >
                        <FloatingLabel label="Job Name" className="mb-3" controlId="floatingTextarea">
                        <Form.Control type="text" name="area_working"  onChange= {handleChange} required= {true}/>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group >
                        <FloatingLabel label="Day Worked" className="mb-3" controlId="floatingTextarea">
                        <Form.Control type="date" name="date_worked"  onChange= {handleChange} required= {true}/>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="floatingTextarea">
                        <FloatingLabel label="Start Time">
                        <Form.Control type="time" name="start_time"  onChange= {handleChange} required= {true}/>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group >
                        <FloatingLabel label="Stop Time" className="mb-3" controlId="floatingTextarea">
                        <Form.Control type="time" name="end_time"  onChange= {handleChange} required= {true}/>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group>
                        <FloatingLabel controlId="floatingSelect" className="mb-3" label="Select Status" >
                            <Form.Select  type="test" name="labor_code" onChange= {handleChange} required= {true}>
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
                    
                    </Col>
                    <Col md={4}>
                        <h4> Request Time Off Here</h4>
                    <Form onSubmit= {handleSubmit2}>
                    <Form.Group >
                        <FloatingLabel label="User Name" className="mb-3" controlId="floatingTextarea">
                        <Form.Control type="text" name="username" placeholder="Enter User Name Here" onChange= {handleChange2} required= {true}/>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <FloatingLabel label="Start Date">
                        <Form.Control type="date" name="vacation_start_date"  onChange= {handleChange2} required= {true}/>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group >
                        <FloatingLabel label="End Date" className="mb-3" >
                        <Form.Control type="date" name="vacation_end_date" onChange= {handleChange2} required= {true}/>
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
 
export default EmployeeHome;