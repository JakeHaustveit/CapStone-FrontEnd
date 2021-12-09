import React from "react";
import useForm from "../UseForm/UseForm";

const OwnerHome = () => {

    const {formValues, handleChange, handleSubmit } = useForm(OwnerFormSubmit);


    async function OwnerFormSubmit() { 
        const jwt = localStorage.getItem('token');
        
          let response = await axios.post('http://127.0.0.1:8000/owners/', formValues, { headers: {Authorization: 'Bearer ' + jwt}});
          console.log(response.data)
          navigate("../Owner/Home")
      }

    return(
    <div>
            <Container>
                <Col md={3}>                    
                    <Form onSubmit= {handleSubmit}>

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
                <Col>
                    <Form onSubmit= {handleSubmit}>
                        <Form.Group >
                            <FloatingLabel label="Employee Roles" className="mb-3" controlId="floatingTextarea">
                                <Form.Control type="text" name="labor_code" placeholder="Add Employee Roles Here" onChange= {handleChange} required= {true}/>
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