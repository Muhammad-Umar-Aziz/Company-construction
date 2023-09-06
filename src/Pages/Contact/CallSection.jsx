import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import Basicbutton from '../../Reuseable Components/Basicbutton'

const CallSection = () => {
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
    <Container>
    <Row>
      <Col md={8} className='p-5'>
      <h1  style={{color:'rgba(255, 180, 0, 1)',fontFamily:'rubik',fontWeight:'700',fontSize:'40px'}} className='text-center text-md-start' >Call: (541) 931-3526</h1>
      <h1 style={{fontFamily:'rubik',fontWeight:'700',fontSize:'28px'}} className='text-center text-md-start py-4'>We Can’t Wait to Make Your Ideas a Reality</h1>
      </Col>
      <Col md={4} className='d-flex justify-content-center justify-content-md-end align-items-center'>
      <Basicbutton style={buttonStyles} children={"ONLINE ESTIMATE FORM"}/>
      </Col>
    </Row>

    </Container>
    
    </Container>
    </div>
  )
      
  
}

export default CallSection
