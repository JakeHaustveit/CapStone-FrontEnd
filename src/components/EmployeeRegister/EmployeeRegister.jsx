import React from "react";
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { FloatingLabel } from 'react-bootstrap/';
import Button from 'react-bootstrap/Button';
import useForm from '../UseForm/UseForm';
import { useNavigate } from 'react-router-dom';


const EmployeeRegister = (props) => {

    const {formValues, handleChange, handleSubmit } = useForm(RegisterAsAnEmployee);
    
    let navigate= useNavigate();
    //Add Bearer Token For Authentication
    console.log(formValues)
    async function RegisterAsAnEmployee() { 
      const jwt = localStorage.getItem('token');
      let response = await axios.post('http://127.0.0.1:8000/employees/home/', formValues, { headers: {Authorization: 'Bearer ' + jwt}});
      console.log(response.data)
      navigate("../Employee/Login")
    }  

   

    return (
        <div>
        <Form onSubmit= {handleSubmit}>
            
                <Form.Group>
                  <FloatingLabel className="mb-3" label="Business Name" controlId="floatingTextarea">
                    <Form.Control type="text" name="owner_id" placeholder="Enter Business Name Here" onChange= {handleChange} required= {true}/>
                  </FloatingLabel>
                </Form.Group>

                <Form.Group >
                  <FloatingLabel className="mb-3" label="User Name" controlId="floatingTextarea">
                  <Form.Control type="username" name="username" placeholder="Enter UserName" onChange= {handleChange} required= {true}/>
                  </FloatingLabel>

                </Form.Group> 

                <Form.Group>
                <FloatingLabel label="First Name" className="mb-3" controlId="floatingTextarea">
                  <Form.Control type="text" name="first_name" placeholder="Enter First Name" onChange= {handleChange} required= {true}/>
                  </FloatingLabel>
                </Form.Group>

                <Form.Group>
                  <FloatingLabel label="Last Name" className="mb-3" controlId="floatingTextarea">
                    <Form.Control type="text" name="last_name" placeholder="Enter Last Name" onChange= {handleChange} required= {true}/>
                  </FloatingLabel>
                </Form.Group>

                <Form.Group>
                  <FloatingLabel controlId="floatingSelect" label="Job Code">
                    <Form.Select type="test" name="labor_code" onChange= {handleChange} required= {true}>
                      <option>Select Job Code Here</option>
                      {props.employeeJobs.map((job)=>{
                        return(
                          <option value="{job.labor_code}">{job.labor_code}</option>

                        )
                      })}                
                    </Form.Select>
                  </FloatingLabel>                  
                </Form.Group>
                
                <Button variant="primary" type="submit" >
                  Submit
                </Button>
            </Form>
        </div>
    );
}

export default EmployeeRegister;