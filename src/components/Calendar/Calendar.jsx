import React, {Component} from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import "./Calendar.css"
import { Container } from 'react-bootstrap'

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    
    
    
  render() {
    return (
        <div >
            <Container>
            <FullCalendar 
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        eventContent={this.props.listOfJobs}
      />
        </Container>
        </div>
      
    )
  }
}
export default Calendar;