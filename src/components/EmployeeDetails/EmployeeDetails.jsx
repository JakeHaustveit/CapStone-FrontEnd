import React from "react";
import { Col, Row, Container, ButtonGroup, ButtonToolbar } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Table from "react-bootstrap/Table";
import './EmployeeDetails.css'



const EmployeeHome = (props) => {
    let data = Array.from(props.employeeDetailList)

    let navigate = useNavigate()

    const handleClick=(event)=> {
        props.removeEmployee(event)
        props.setLoadData(!props.loadData)
        navigate("../Owner/Home")
        

    }
   

    return(
        <div>
            <Container >
                <Col className="Employee"><h3>Employee Name</h3>
                 
            </Col> 
            <Col  className="button">
            <Table bordered hover>
                <thead>
                    <tr>
                    <td>Day Worked</td>
                    <td>Start Time</td>
                    <td>End Time</td>
                    <td>Labor Code</td>
                    </tr>

                </thead>
                <tbody>
                {data.map((employee) => {
                    return (
                        
                      <tr key={employee.username}>
                        <td>{employee.date_worked}</td>
                        <td>{employee.start_time}</td>
                        <td>{employee.end_time}</td>
                        <td>{employee.labor_code}</td>
                        
                                                      
                      </tr>                             
                      
                    );
                         })}
                </tbody>
            </Table>
            </Col>
            <Col  className="button">
            
                <ButtonGroup className="buttonGroup">
                    <Button onClick={() => handleClick(data.username)}>Delete Employee</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button onClick={()=>{navigate("../Owner/Home")} }> Return </Button>
                </ButtonGroup>
            

            </Col>
            
            </Container>
        </div>
        
    )

}

export default EmployeeHome;