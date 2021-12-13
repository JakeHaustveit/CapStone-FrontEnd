import React, {Component} from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import "./Calendar.css"
import { Container } from 'react-bootstrap'

export default class Calendar extends Component {
  
    
    
    
  render() {
    return (
        <div >
            <Container>
            <FullCalendar 
        plugins={[ dayGridPlugin, interactionPlugin, timeGridPlugin ]}
        initialView="dayGridMonth"
        
      />
        </Container>
        </div>
      
    )
  }
}

 