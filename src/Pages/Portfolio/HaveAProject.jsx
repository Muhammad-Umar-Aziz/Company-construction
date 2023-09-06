import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const HaveAProject = () => {
  return (
    <div>
    <Container fluid style={{backgroundColor:'rgba(255, 180, 0, 1)'}}>
    <Row>
        <Col md={12} className='py-5'>
        <h1 style={{ fontFamily: 'Rubik', fontWeight: '700', fontSize: '50px' }} className='text-center' >Have a Project in Mind?</h1>
           <h1 style={{ fontFamily: 'Rubik', fontWeight: '700', fontSize: '50px' }} className='text-center' >Let’s Get Building!</h1>

        </Col>
    </Row>

    </Container>
      
    </div>
  )
}

export default HaveAProject
