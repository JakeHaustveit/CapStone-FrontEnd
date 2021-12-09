import React from 'react';
import './HomeScreen.css'
import { Col, Row, Container } from "react-bootstrap";


function HomeScreen(){

    return(
        <div>
            <Container className="homeScreenStyling">
                <Row>
                    <h1>Welcome to Business Manager</h1>
                    <p>A website for small business to manage daily tasks and employee productivity</p>
                </Row>
            </Container>
        </div>
        
    )
}

export default HomeScreen;