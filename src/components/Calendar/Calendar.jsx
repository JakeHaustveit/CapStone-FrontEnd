import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import "./Calendar.css"
import { Container } from 'react-bootstrap'

class Calendar extends React.Component {
  render() {
    return (
        <div >
            <Container>
            <FullCalendar 
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
      />
        </Container>
        </div>
      
    )
  }
}
export default Calendar;