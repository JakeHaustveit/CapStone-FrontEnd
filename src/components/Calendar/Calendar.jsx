import React,{useRef, useState} from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import "./Calendar.css"
import { Button, Container } from 'react-bootstrap'
import AddEventModal from './AddEventModal'
import axios from 'axios'
import moment from "moment"
import { useEffect } from 'react'





export default function(props){
  const[modalOpen, setModalOpen]= useState("")
  const[events, setEvents] = useState([])
  const calendarRef = useRef(null) 
  const [toggle, setToggle] = useState(false)

  const onEventAdded = event => {
    let calendarApi = calendarRef.current.getApi()
    calendarApi.addEvent( {
      title: event.title,
      description: event.description,            
      start: event.start,
      end: event.end
    })
  }

 
    useEffect(()=>{
      handleDatesSet()
    },[toggle])
  

  async function handleEventAdd(data) {
    const jwt = localStorage.getItem('token');
    await axios.post(`http://127.0.0.1:8000/owners/registerjobs/`, data, { headers: {Authorization: 'Bearer ' + jwt},})
            // business_name: data.business_name, job_site: data.job_site, job_name: data.job_name, job_start_date: data.job_start_date, job_end_date: data.job_end_date });
            setToggle(!toggle)
        
  }

 async function handleDatesSet(data) {
   console.log(props)
   let business_name= props.user.business_name
   const jwt = localStorage.getItem('token');
   const response = await axios.get(`http://127.0.0.1:8000/owners/addJobs/${business_name}`, { headers: {Authorization: 'Bearer ' + jwt}})
   console.log(response.data)
   setEvents(response.data)
 }
  
  

    return( 
      <Container>
        <Button onClick={()=> setModalOpen(true) }>Add Event</Button>
          <div style={{position: "relative", zIndex:0}}>
            <FullCalendar
            ref={calendarRef}
            events={events}
            plugins={[ dayGridPlugin]}
            initialView= 'dayGridMonth'
            // eventContent={}
            eventAdd={event => handleEventAdd(event)}
            datesSet={()=> handleDatesSet()}                     
            />
          </div>
          <AddEventModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onEventAdded={event=> onEventAdded(event)} handleEventAdd = {handleEventAdd} />
      </Container>
      
    )

};


  

  
  






  

