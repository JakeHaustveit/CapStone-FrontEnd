import React,{useRef, useState} from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import "./Calendar.css"
import { Button, Container, Stack, Col } from 'react-bootstrap'
import AddEventModal from './AddEventModal'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function(props){
  const[modalOpen, setModalOpen]= useState("")
  const[jobEvents, setJobEvents] = useState([])
  const calendarRef = useRef(null) 
  const [toggle, setToggle] = useState(false)

  let navigate= useNavigate();

  const onEventAdded = (event) => {
    let calendarApi = calendarRef.current.getApi()
    calendarApi.addEvent( {
      title: event.title || event.job_name,
      description: event.description || event.job_site,            
      start: event.start || event.job_start_date,
      end: event.end || event.job_end_date
    })
  }


  function renderEventContent(events){
    return(
      events.map((event)=>{
      onEventAdded(event)
      })
    )
  }

  function returnButton(){

    if(props.user.is_staff=== true){     
      navigate("../Owner/Home")  
    }
    else{
      navigate("../Employee/Home")
    }
  }

  function renderButton(){
    return(
      <div>
      <Button onClick={()=> setModalOpen(true) }>Add Event</Button>
      </div>
    )
  }
 
  useEffect(()=>{
      handleDatesSet()
    },[toggle])
  

  async function handleEventAdd() {
    const jwt = localStorage.getItem('token');
    await axios.post(`http://127.0.0.1:8000/owners/registerjobs/`, { headers: {Authorization: 'Bearer ' + jwt},})
    setToggle(!toggle)
            
        
  }

  async function handleDatesSet() {
    console.log(props)
    var business_name
 
    if(props.user.is_staff=== true){
     
       business_name = props.user.business_name
     
    }else{
      business_name =props.user.owner_id
    }
    
    const jwt = localStorage.getItem('token');
    const response = await axios.get(`http://127.0.0.1:8000/owners/addJobs/${business_name}`, { headers: {Authorization: 'Bearer ' + jwt}})
    console.log(response.data)
    renderEventContent(response.data)
    setJobEvents(response.data)
  }
  

  

  return( 
    <Container className="button">
       <Col className="col-md-3 mx-auto">
       <Stack gap= {2}>
         <div>
           {props.user.is_staff === true ? renderButton() : null }
         </div>
        
        <Button onClick={()=> returnButton() }>Return</Button>
      </Stack>
       </Col>

        <div style={{position: "relative", zIndex:0}}>
          <FullCalendar
          ref={calendarRef}
          events={jobEvents}
          plugins={[ dayGridPlugin]}
          initialView= 'dayGridMonth'            
          eventAdd={(event) => handleEventAdd(event)}  
          />
        </div>
        <AddEventModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onEventAdded={(event)=> onEventAdded(event)} handleEventAdd = {handleEventAdd} />
    </Container>  
  )

};


  

  
  






  

