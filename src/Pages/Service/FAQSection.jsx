import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Basicbutton from '../../Reuseable Components/Basicbutton'
import img from '../../Assests/underline.svg';
import { Accordion } from 'react-bootstrap';

const FAQSection = () => {
    const buttonStyles = {
        borderRadius: '0',
        border: '5px solid rgba(255, 180, 0, 1)',
        backgroundColor:'rgba(247, 247, 247, 1)',
        fontFamily: 'Rubik, sans-serif',
        fontWeight: 600,
        fontSize: '12px',
        padding: '12px 16px',
        cursor: 'pointer',
        color: ' rgba(255, 180, 0, 1)',
        
      };
  return (
    <div>
    <Container fluid style={{backgroundColor:'rgba(247, 247, 247, 1)'}} className='pt-5'>
    <Container>
    <Row>
        <Col md={4} className='p-5'>
            <h1 style={{ fontFamily: 'Rubik', fontWeight: '700', fontSize: '40px' }} className='pb-3 text-center text-md-start'>F.A.Q.</h1>
            <div className='pb-5 d-flex justify-content-center justify-content-md-start'>
            <img src={img}/>

            </div>
           
            <p style={{fontFamily:'Open Sans',fontSize:'15px',fontWeight:'400'}} className='pb-4 text-center text-md-start'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. 
            </p>
            <div className='d-flex justify-content-center justify-content-md-start'>
            <Basicbutton style={buttonStyles} children={"ASK A QUESTION"}/>
            </div>
           
            </Col>
            <Col md={8}>
            <div className='p-5'>
            <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0" className='border border-0 border-bottom'>
        <Accordion.Header><span style={{ fontFamily: 'Rubik', fontWeight: '500', fontSize: '16px' }} className='text-center text-md-start'>Donec rutrum congue leo eget malesuada?</span></Accordion.Header>
        <Accordion.Body>
        <p  style={{fontFamily:'Open Sans',fontSize:'15px',fontWeight:'400'}} className='text-center text-md-start'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          </p>
         </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><span className='text-center text-md-start'  style={{ fontFamily: 'Rubik', fontWeight: '500', fontSize: '16px' }}>Vivamus suscipit tortor eget felis porttitor volutpat?</span></Accordion.Header>
        <Accordion.Body>
        <p style={{fontFamily:'Open Sans',fontSize:'15px',fontWeight:'400'}} className='text-center text-md-start'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
         
        
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><span  style={{ fontFamily: 'Rubik', fontWeight: '500', fontSize: '16px' }}>Curabitur non nulla sit amet nisl tempus?</span></Accordion.Header>
        <Accordion.Body>
        <p style={{fontFamily:'Open Sans',fontSize:'15px',fontWeight:'400'}} className='text-center text-md-start'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><span  style={{ fontFamily: 'Rubik', fontWeight: '500', fontSize: '16px' }}>Pellentesque in ipsum id orci porta dapibus?</span></Accordion.Header>
        <Accordion.Body>
        <p style={{fontFamily:'Open Sans',fontSize:'15px',fontWeight:'400'}} className='text-center text-md-start'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header><span  style={{ fontFamily: 'Rubik', fontWeight: '500', fontSize: '16px' }}>Curabitur non nulla sit amet nisl?</span></Accordion.Header>
        <Accordion.Body>
        <p style={{fontFamily:'Open Sans',fontSize:'15px',fontWeight:'400'}} className='text-center text-md-start'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

            </div>
           

            </Col>
        </Row>

    </Container>
        
    </Container>
    
    </div>
  )
}

export default FAQSection
