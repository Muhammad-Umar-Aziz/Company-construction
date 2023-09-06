import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img from '../../Assests/project-02.svg';
import img1 from '../../Assests/underline.svg';
import img2 from '../../Assests/main-img.svg';
import img3 from '../../Assests/lower-img.svg';

const AboutThisProject = () => {
  return (
    <div>
    <Container>
        <Row className='py-5'>
            <Col md={6} className='px-5'>
                <h1 style={{ fontFamily: 'rubik', fontWeight: '700', fontSize: '40px' }} className='text-center text-md-start'>About this Project</h1>
                 <div className='d-flex justify-content-center justify-content-md-start'>
                 <img src={img1} className='py-4'/>
                 </div>
              
                 <p style={{color:'rgba(102, 102, 102, 1)', fontFamily: 'Open Sans', fontWeight: '400', fontSize: '15px'}}  className='text-center text-md-start'>
                 Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus
                 </p>
                 {/* <ul className='d-flex flex-column justify-content-center justify-content-md-start align-items-center align-items-md-start'> */}
                    <ul>
                    <li style={{color:'rgba(102, 102, 102, 1)', fontFamily: 'Open Sans', fontWeight: '400', fontSize: '15px'}}> Maecenas ornare nisl</li>
                    <li style={{color:'rgba(102, 102, 102, 1)', fontFamily: 'Open Sans', fontWeight: '400', fontSize: '15px'}}> A tortor ultrices bibendum</li>
                    <li style={{color:'rgba(102, 102, 102, 1)', fontFamily: 'Open Sans', fontWeight: '400', fontSize: '15px'}}>ulla fermentum</li>
                    <li style={{color:'rgba(102, 102, 102, 1)', fontFamily: 'Open Sans', fontWeight: '400', fontSize: '15px'}}> Metus quis</li>
                    <li style={{color:'rgba(102, 102, 102, 1)', fontFamily: 'Open Sans', fontWeight: '400', fontSize: '15px'}}> Sodales tristique</li>
                 </ul>
            </Col>
            <Col md={6}>
                <img src={img} className='img-fluid w-100'/>
            </Col>
        </Row>
        <Row className="align-items-center justify-content-center mb-5 mt-5">
  <Col md={12} className="text-center">
    <img className="img-fluid w-100" src={img2} alt="Centered Image" />
  </Col>
</Row>
<Row className='mt-5 mb-5'>
<Col md={6}>
    <img src={img3} className='img-fluid w-100'/>
</Col>
<Col md={6}>
         <p style={{color:'rgba(102, 102, 102, 1)', fontFamily: 'Open Sans', fontWeight: '400', fontSize: '15px'}}  className='text-center text-md-start px-5'>
                 Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue non feugiat ligula neque nec felis.<br/><br/>
Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue, non feugiat ligula neque nec felis.</p>
</Col>
</Row>

    </Container>
      
    </div>
  )
}

export default AboutThisProject
