import React from 'react'
import { Col, Row } from 'react-bootstrap'
import underline from '../../Assests/underline.svg'
import video from '../../Assests/latest.mp4';
import Basicbutton from '../../Reuseable Components/Basicbutton'

const AboutProcess = () => {

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
    <container fluid>
        <Row className='gx-0'>
        <Col md={4} className='p-5' style={{backgroundColor:'rgba(42, 42, 42, 1)'}}>
                <h1 style={{ fontFamily: 'rubik', fontWeight: '700', fontSize: '40px' }} className='text-center text-md-start text-light'>About this Project</h1>
                 <div className='d-flex justify-content-center justify-content-md-start'>
                 <img src={underline} className='py-4'/>
                 </div>
              
                 <p style={{color:'rgba(102, 102, 102, 1)', fontFamily: 'Open Sans', fontWeight: '400', fontSize: '15px'}}  className='text-center text-md-start text-light'>
                 Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus
                 </p>
                 {/* <ul className='d-flex flex-column justify-content-center justify-content-md-start align-items-center align-items-md-start'> */}
                    <ul className='text-light white-dots"'>
                    <li className='text-white' style={{color:'rgba(102, 102, 102, 1)', fontFamily: 'Open Sans', fontWeight: '400', fontSize: '15px'}}> Maecenas ornare nisl</li>
                    <li className='text-white' style={{color:'rgba(102, 102, 102, 1)', fontFamily: 'Open Sans', fontWeight: '400', fontSize: '15px'}}> A tortor ultrices bibendum</li>
                    <li className='text-white' style={{color:'rgba(102, 102, 102, 1)', fontFamily: 'Open Sans', fontWeight: '400', fontSize: '15px'}}>ulla fermentum</li>
                    <li className='text-white' style={{color:'rgba(102, 102, 102, 1)', fontFamily: 'Open Sans', fontWeight: '400', fontSize: '15px'}}> Metus quis</li>
                    <li className='text-white' style={{color:'rgba(102, 102, 102, 1)', fontFamily: 'Open Sans', fontWeight: '400', fontSize: '15px'}}> Sodales tristique</li>
                 </ul>
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
    </container>
      
    </div>
  )
}

export default AboutProcess
