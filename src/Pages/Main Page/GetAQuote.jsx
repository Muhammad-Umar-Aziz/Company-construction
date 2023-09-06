import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import Basicbutton from '../../Reuseable Components/Basicbutton'

const GetAQuote = () => {

    const buttonStyles = {
        borderRadius: '0',
        border: '5px solid rgba(255, 180, 0, 1)',
        backgroundColor:'white',
        fontFamily: 'Rubik, sans-serif',
        fontWeight: 600,
        fontSize: '14px',
        padding: '12px 32px',
        cursor: 'pointer',
        color: ' rgba(255, 180, 0, 1)',
        
      };
  return (
    <div>
    <Container>
    <Row>
      <Col md={8} className='p-5'>
      <h1 style={{fontFamily:'rubik',fontWeight:'700',fontSize:'40px'}} className='text-center text-md-start'>Get a Quote For Your Project</h1>
      </Col>
      <Col md={4} className='d-flex justify-content-center justify-content-md-end p-5'>
      <Basicbutton style={buttonStyles} children={"FREE QUOTE"}/>
      </Col>
    </Row>
    </Container>
    </div>
  )
}

export default GetAQuote
