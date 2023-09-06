import React from 'react'
import Basicbanner from "../../Reuseable Components/Basicbanner";
import { Col, Container, Row } from "react-bootstrap";
import Basicbannercard from "../../Reuseable Components/Basicbannercard";
import img1 from '../../Assests/contact-fb.svg'
import img2 from '../../Assests/contact-twitter.svg'
import img3 from '../../Assests/contact-linkedin.svg'

const ContactHeader = () => {
    const SettingsArray =[
        {
            text: "Construction",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut. Mi nibh amet viverra id aliquet neque odio.",
        }
          ] 
          return (
    <div>
        <Container fluid>
        <Row className="">
          <Col md={8} className="bg_image">
           <Basicbanner settings={SettingsArray} />
           </Col>
           <Col md={4} className="bg_color" style={{backgroundColor:'rgba(255, 180, 0, 1)'}}>
      <div className="p-5">
        <h1 style={{ fontFamily: 'Rubik', fontWeight: '700' }} className="pb-3 text-center text-md-start">Contact Info</h1>
          <Basicbannercard title="Our Office" description="1234 Divi St. #1000, San Francisc, CA 93251" imageSrc=""/>
          <Basicbannercard title="Open Office Hours"description={<>M-F: 9am – 6pm<br />S-S: 10am – 4pm</>}imageSrc=""/>
          <Basicbannercard title="Get in Touch" description={<>constructioninc.com<br />(346) 426-2351</>}imageSrc=""/>
           <div className='d-flex justify-content-center justify-content-md-start'>
            <img src={img1} className='img-fluid p-3'/>
            <img src={img2} className='img-fluid p-3'/>
            <img src={img3} className='img-fluid p-3'/>
           </div>
      </div>
    </Col>
      </Row>
      </Container>
   
      
    </div>
  );
};

export default ContactHeader
