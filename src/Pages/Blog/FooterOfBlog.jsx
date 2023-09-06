import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img from '../../Assests/black-underline.svg';
import Basicbutton from '../../Reuseable Components/Basicbutton';
import fb from '../../Assests/fb.svg';
import tweet from '../../Assests/tweeter.svg';
import linkedin from '../../Assests/linkedin.svg';
import location from '../../Assests/location.svg';
import mail from '../../Assests/mail.svg';
import phone from '../../Assests/phone.svg';


const FooterOfBlog = () => {
    const buttonStyles = {
        borderRadius: '0',
        border: '5px solid white',
        backgroundColor:'rgba(255, 180, 0, 1)',
        fontFamily: 'Rubik, sans-serif',
        fontWeight: 600,
        fontSize: '14px',
        padding: '7px 50px',
        cursor: 'pointer',
        color: 'white',
        
      };
  return (
    <div>
    <Container fluid>
        <Row>
        <Col md={6} style={{ backgroundColor: 'rgba(255, 180, 0, 1)' }} className='p-3 p-md-5'>
        <Row>
        <h1 style={{ fontFamily: 'Rubik', fontWeight: 700, fontSize: '40px' }} className='text-center text-md-start'>Contact Us</h1>
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

<Col md={6}>
  <Row style={{ backgroundColor: 'rgba(42, 42, 42, 1)' }} className='p-3 p-md-4'>
    <div className='d-flex justify-content-center'>
      <img src={fb} className='p-3 p-md-4' />
      <img src={tweet} className='p-3 p-md-4' />
      <img src={linkedin} className='p-3 p-md-4' />
    </div>
  </Row>
  <Row>
  <div className='p-3 p-md-5'>
      <div className='d-flex mb-3'>
        <img src={location} alt="Location" className='ps-1' />
        <p style={{ fontFamily: 'Rubik', fontWeight: '500', fontSize: '15px' }} className='pt-3 ps-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className='d-flex mb-3'>
        <img src={phone} alt="Phone" />
        <p style={{ fontFamily: 'Rubik', fontWeight: '500', fontSize: '15px' }} className='pt-3 ps-3'>+00 123 456 78</p>
      </div>
      <div className='d-flex'>
        <img src={mail} alt="Email" />
        <p style={{ fontFamily: 'Rubik', fontWeight: '500', fontSize: '15px' }} className='pt-3 ps-3'>constractioninc@gmail.com</p>
      </div>
    </div>
  </Row>
</Col>

        </Row>
    </Container>
    </div>
  )
}
export default FooterOfBlog
