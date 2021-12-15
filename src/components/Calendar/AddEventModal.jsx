import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import Modal from "react-modal";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

export default function ({isOpen, onClose, onEventAdded, handleEventAdd}) {
    const [job_name, setJobName]=useState("")
    const [job_site, setJobSite]=useState("")
    const [business_name, setBusinessName]=useState("")
    const [job_start_date, setJobStartDate]=useState("")
    const [job_end_date, setJobEndDate]=useState("")
   

    

    const onSubmit = (event) => {
        event.preventDefault();
        const newEvent = {
            job_name:job_name,
            job_site:job_site,
            business_name:business_name,
            job_start_date:job_start_date,
            job_end_date:job_end_date
        }

        handleEventAdd(newEvent)

        onEventAdded({
            title: job_name,
            description: job_site,            
            start: job_start_date,
            end: job_end_date
        })
        onClose();
    }

    
    return(
        <Modal isOpen={isOpen} onRequestClose={onClose}>
            <Form onSubmit= {onSubmit}>

                <Form.Group >
                    <FloatingLabel label="Job Name" className="mb-3" controlId="floatingTextarea">
                        <Form.Control type="text" name="job_name" onChange= {e => setJobName(e.target.value)} required= {true}/>
                    </FloatingLabel>
                </Form.Group>

                <Form.Group >
                    <FloatingLabel label="Job Site" className="mb-3" controlId="floatingTextarea">
                    <Form.Control type="text" value={job_site} onChange= {e => setJobSite(e.target.value)} required= {true}/>
                    </FloatingLabel>
                </Form.Group>

                <Form.Group >
                    <FloatingLabel label="Business Name" className="mb-3" controlId="floatingTextarea">
                        <Form.Control type="text" name="business_name" onChange= {e => setBusinessName(e.target.value)} required= {true}/>
                    </FloatingLabel>
                </Form.Group>

                <Form.Group >
                    <FloatingLabel label="Start Date" className="mb-3" controlId="floatingTextarea">
                        <Form.Control type="date" name="job_start_date"  onChange= {e => setJobStartDate(e.target.value)} required= {true}/>
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3" controlId="floatingTextarea">
                    <FloatingLabel label="Job End Date">
                        <Form.Control type="date" name="job_end_date" onChange= {e => setJobEndDate(e.target.value)} required= {true}/>
                    </FloatingLabel>
                </Form.Group>
                <Button type="submit">Add Event</Button>
            </Form>

        </Modal>
    )
}