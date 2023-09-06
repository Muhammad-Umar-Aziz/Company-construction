import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './project.scss';
import img from '../../Assests/line.svg';


const Projectheader = () => {

  const SettingsArray =[
    {
        text: "Monarch HQ Project",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut.",
    }
      ] 
  return (
    <div>
    <Container fluid className='bg-img mb-5'>
    <Row>
      <Col md={8}>
      
      <div className='basic_banner'>
            <div className='d-flex justify-content-center justify-content-md-start pb-4'>
                <img src={img}/>
                <h1 className='heaading_font text-white ps-4 pt-4 text-center text-md-start'>Monarch HQ Project</h1>
            </div>
                 <p className='text-white paragraph_font mb-5 text-center text-md-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut. </p>
                 <div className='d-flex justify-content-center justify-content-md-start'>
               </div>
                 
            </div>
        
      </Col>
      <Col md={4} className='date_paddings text-center text-md-start'>
      <div>
      <p className='text-light'  style={{ fontFamily: 'Open Sans', fontWeight: '600', fontSize: '16px' }}>
        Date: 12 April 2018</p>
      </div>
      <div>
      <p className='text-light'  style={{ fontFamily: 'Open Sans', fontWeight: '600', fontSize: '16px' }}>
        Client: Monarch Group</p>
      </div>
      <div>
      <p className='text-light'  style={{ fontFamily: 'Open Sans', fontWeight: '600', fontSize: '16px' }}>
        Project Type: Building Renovation
        </p>
      </div>
       
       
       
      </Col>
    </Row>

    </Container>
    </div>
  )
}

export default Projectheader
