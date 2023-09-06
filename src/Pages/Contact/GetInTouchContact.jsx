import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img from '../../Assests/black-underline.svg';
import Basicbutton from '../../Reuseable Components/Basicbutton';
import { Accordion } from 'react-bootstrap';

const GetInTouchContact = () => {

    const buttonStyles = {
        borderRadius: '0',
        border: '5px solid rgba(42, 42, 42, 1)',
        backgroundColor:'rgba(247, 247, 247, 1)',
        fontFamily: 'Rubik, sans-serif',
        fontWeight: 600,
        fontSize: '14px',
        padding: '7px 50px',
        cursor: 'pointer',
        color: 'rgba(42, 42, 42, 1)',
        
      };
  return (
    <div>
    <Container fluid className='py-5' style={{ backgroundColor: 'rgba(247, 247, 247, 1)' }} >
        <Row>
        <Col md={6} style={{ backgroundColor: 'rgba(247, 247, 247, 1)' }} className='p-3 p-md-5'>
        <Row>
        <h1 style={{ fontFamily: 'Rubik', fontWeight: 700, fontSize: '40px' }} className='text-center text-md-start'>Get In Touch</h1>
  <div className='py-5 d-flex justify-content-center justify-content-md-start'>
    <img src={img} alt="Contact Us" />
  </div>

        </Row>
        <div className="d-flex flex-column">
      <input type="text"className="form-control border rounded-0 me-3 p-2 mb-4"placeholder="Name"/>
      <input type="email"className="form-control border rounded-0 p-2 mb-4"placeholder="Email"/></div>
        <Row> 
        <div className="form-outline mb-4">
      <textarea className="form-control border rounded-0" rows="4" placeholder="Message"></textarea>
      </div>
      </Row>
 
  <form>
   
   
    <div className='d-flex justify-content-center justify-content-md-end'>
      <Basicbutton style={buttonStyles} children={"SEND MESSAGE"} />
    </div>
  </form>
</Col>

<Col md={6} style={{ backgroundColor: 'rgba(247, 247, 247, 1)' }} >
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
    </div>
  )
}

export default GetInTouchContact
