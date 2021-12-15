import React,{useRef, useState} from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import "./Calendar.css"
import { Button, Container } from 'react-bootstrap'
import AddEventModal from './AddEventModal'
import axios from 'axios'
import { useEffect } from 'react'






export default function(props){
  const[modalOpen, setModalOpen]= useState("")
  const[jobEvents, setJobEvents] = useState([])
  const calendarRef = useRef(null) 
  const [toggle, setToggle] = useState(false)

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
 
  useEffect(()=>{
      handleDatesSet()
    },[toggle])
  

  async function handleEventAdd() {
    const jwt = localStorage.getItem('token');
    await axios.post(`http://127.0.0.1:8000/owners/registerjobs/`, { headers: {Authorization: 'Bearer ' + jwt},})
            // business_name: data.business_name, job_site: data.job_site, job_name: data.job_name, job_start_date: data.job_start_date, job_end_date: data.job_end_date });
            setToggle(!toggle)
            
        
  }

 async function handleDatesSet() {
   console.log(props)
   let business_name= props.user.business_name
   const jwt = localStorage.getItem('token');
   const response = await axios.get(`http://127.0.0.1:8000/owners/addJobs/${business_name}`, { headers: {Authorization: 'Bearer ' + jwt}})
   console.log(response.data)
   renderEventContent(response.data)
   setJobEvents(response.data)
 }
  
  

    return( 
      <Container>
        <Button onClick={()=> setModalOpen(true) }>Add Event</Button>
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


  

  
  






  

