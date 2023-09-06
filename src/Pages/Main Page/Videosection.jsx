import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import video from '../../Assests/latest.mp4';
import img from '../../Assests/underline.svg';
import Basicbutton from '../../Reuseable Components/Basicbutton';

const Videosection = () =>{
  const buttonStyles = {
    borderRadius: '0',
    border: '5px solid rgba(255, 180, 0, 1)',
    backgroundColor:'rgba(42, 42, 42, 1)',
    fontFamily: 'Rubik, sans-serif',
    fontWeight: 600,
    fontSize: '14px',
    padding: '12px 50px',
    cursor: 'pointer',
    color: ' rgba(255, 180, 0, 1)',
    
  };

  const buttonStyles1 = {
    borderRadius: '0',
    border: '5px solid rgba(31, 31, 31, 1)',
    backgroundColor:'white',
    fontFamily: 'Rubik, sans-serif',
    fontWeight: 600,
    fontSize: '14px',
    padding: '12px 50px',
    cursor: 'pointer',
    color: 'rgba(31, 31, 31, 1)',
    
  };
  return (
    <div>
    <Container fluid>
  <Row>
  <Col md={4} className='p-5' style={{ backgroundColor: 'rgba(42, 42, 42, 1)'}}>
      <h1 style={{ fontFamily: 'Rubik', fontWeight: '700', fontSize: '40px', color:'white' }} className='pb-3 text-center text-md-start'>We’ve Been Building For Over 10 Years</h1>
      <div className='pb-5 d-flex justify-content-center justify-content-md-start'>
        <img src={img} alt="Building" />
      </div>
      <p style={{ fontFamily:'Open Sans', fontSize:'15px', fontWeight:'400', color:'white' }} className='pb-4 text-center text-md-start'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. Scelerisque lorem posuere iaculis nunc amet phasellus.
      </p>
      <div className='pb-5 d-flex justify-content-center justify-content-md-start'>
        <Basicbutton style={buttonStyles} children={"ABOUT US"} />
      </div>
    </Col>
    <Col md={8} className='p-0 mb-0 d-flex flex-column justify-content-md-between'  style={{Height: '600px'}}>
      <Row className='g-0'>
        <Col md={12} className='p-0 mb-0'>
        <video loop muted autoPlay src={video} controls width='100%' style={{ objectFit: 'cover', height: '100%' }} />

        </Col>
      </Row>
      <Row className='m-0 gx-0'>
        <Col md={6} style={{backgroundColor:'rgba(255, 180, 0, 1)'}} className='py-3 ps-4'>
          <h1 className='text-center text-md-start' style={{ fontFamily:'rubik', fontSize:'30px', fontWeight:'700' }}>Call for a Quote</h1>
          <p className='text-center text-md-start' style={{ fontFamily:'rubik', fontSize:'24px', fontWeight:'500' }}>(346) 234-6973</p>
        </Col>
        <Col md={6} style={{backgroundColor:'white'}} className='text-light py-3 d-flex justify-content-center align-items-center'>
          <Basicbutton style={buttonStyles1} children={"ONLINE ESTIMATE FORM"} />
        </Col>
      </Row>
    </Col>
  </Row>
</Container>

      
    </div>
  )
}

export default Videosection
