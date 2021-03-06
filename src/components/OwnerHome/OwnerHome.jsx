import React, { useEffect } from "react";
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useForm from '../UseForm/UseForm';
import { useNavigate } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './OwnerHome.css'
import { Col, Row, Container } from "react-bootstrap";
import useForm2 from "../UseForm/UseForm2";
import Table from "react-bootstrap/Table";


const OwnerHome = (props) => {

    const {formValues, handleChange, handleSubmit } = useForm(OwnerAddJobsFormSubmit);
    const {formValues2, handleChange2, handleSubmit2} = useForm2(OwnerEmployeeLaborCodeFormSubmit);
    let navigate= useNavigate();

    useEffect(()=>{

    },[props.loadData])
    

    // Adds jobs 
    async function OwnerAddJobsFormSubmit() { 
        const jwt = localStorage.getItem('token');
        console.log(formValues)
        
        let response = await axios.post(`http://127.0.0.1:8000/owners/registerjobs/`, { headers: {Authorization: 'Bearer ' + jwt},
            business_name: formValues.business_name, job_site: formValues.job_site, job_name: formValues.job_name, job_start_date: formValues.job_start_date, job_end_date: formValues.job_end_date });
        console.log(response.data)
       
        
    }

        // Sets Employee Labor Code
    async function OwnerEmployeeLaborCodeFormSubmit() { 

        const jwt = localStorage.getItem('token'); 

        let response = await axios.post(`http://127.0.0.1:8000/owners/employeeroleregistration/`, { headers: {Authorization: 'Bearer ' + jwt}, labor_code: formValues2.labor_code});
        console.log(response.data);
        
        
    }

    async function viewEmployee(employee) {
        await props.employeeDetailList(employee)
        await props.employeeVacationList(employee)
        navigate("..//EmployeeDetails")
    } 

   



    return(
    <div className="Form">
        
        <h3 > Welcome, {props.loggedInUser.first_name} {props.loggedInUser.last_name}!</h3>
            <Container className="Container">
                <Row>
                    <Col md={0}>
                    </Col>               
                <Col  md={9}>
                <h5> Employee Data </h5> 
                   <Table bordered hover>
                       <thead>
                           <tr>
                               <td>User Name</td>
                               <td>First Name</td>
                               <td>Last Name</td>
                               <td>Employee Details</td>
                           </tr>
                       </thead>
                       <tbody>
                           
                         {props.listOfEmployees.map((employee) => {
                           return (
                             <tr key={employee.username}>
                               <td>{employee.username}</td>
                               <td>{employee.first_name}</td>
                               <td>{employee.last_name}</td>
                               <td><Button onClick={() => viewEmployee(employee.username)}>Employee Time Sheet</Button> </td>                                                             
                             </tr>
                           );
                        })}
                       </tbody>
                   </Table>
                </Col>
                <Col md={2} style={{margin_top: "50px"}}>
                <h6> Add Jobs Here </h6> 
                    <Form onSubmit= {handleSubmit2}>
                        <Form.Group >
                            <FloatingLabel label="Employee Roles" className="mb-3" controlId="floatingTextarea">
                                <Form.Control type="text" name="labor_code"  onChange= {handleChange2} required= {true}/>
                            </FloatingLabel>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                </Col>
                </Row>
            </Container>
            

        </div>
        
    );
}
 
export default OwnerHome;