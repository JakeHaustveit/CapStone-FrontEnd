import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Table from "react-bootstrap/Table";



const EmployeeHome = (props) => {
    let data = Array.from(props.employeeDetailList)

    let navigate = useNavigate()

    const handleClick=(event)=> {
        props.removeEmployee(event)
        navigate("../Owner/Home")

    }
   

    return(
        <div>
            <Container>
            <h3>{}Employee Name</h3>
            
            
            <Table>
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
                        <td><Button onClick={() => handleClick(employee.username)}>Delete Employee</Button> </td>
                                                      
                      </tr>                             
                      
                    );
                         })}
                </tbody>
            </Table>
            <Button onClick={()=>{navigate("../Owner/Home")} }> Return </Button>
            </Container>
        </div>
        
    )

}

export default EmployeeHome;