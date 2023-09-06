import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import OnlyTheBestReuseable from '../../Reuseable Components/OnlyTheBestReuseable'
import img from '../../Assests/arrow-last.svg'
import img1 from '../../Assests/underline.svg'
import Basicbutton from '../../Reuseable Components/Basicbutton'

const EcoFriendly = () => {

  const buttonStyles1 = {
    borderRadius: '0',
    border: '5px solid rgba(255, 180, 0, 1)',
    backgroundColor:'rgba(42, 42, 42, 1)',
    fontFamily: 'Rubik, sans-serif',
    fontWeight: 600,
    fontSize: '14px',
    padding: '17px 50px',
    cursor: 'pointer',
    color: 'rgba(255, 180, 0, 1)',
    
  };
  return (
    <div>
    <Container fluid>
        <Row>
            <Col md={4} style={{backgroundColor:'rgba(255, 180, 0, 1)'}} className='eco-paddings'>
            <OnlyTheBestReuseable
            title="Eco Friendly Construction"
  imageSrc={img}
  description="Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi."
/>
        
           <OnlyTheBestReuseable
            title="The Newest Technology Repairs"
  imageSrc={img}
  description="Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi."
          />
          <OnlyTheBestReuseable
           title="High Quality Construction Management"
  imageSrc={img}
  description="Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi."
          />

            </Col>
            <Col md={8} className='g-0 d-flex flex-column justify-content-between'style={{backgroundColor:'rgba(247, 247, 247, 1)'}}>
            <div className='p-5'>
    <h1 className='text-center py-4' style={{ fontFamily: 'Rubik', fontWeight: '700', fontSize: '40px' }}>No Project Too Big Or Too Small</h1>
    <div className='d-flex justify-content-center justify-content-md-start py-4'>
            <img src={img1}/>
            </div>
   
        <Row>
            <Col md={6}>
                <p className='text-center text-md-start mb-4' style={{color:'rgba(102, 102, 102, 1)',fontFamily:'Open Sans',fontSize:'15px',fontWeight:'400'}}>Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue, non feugiat ligula neque nec felis </p>
            </Col>

            <Col md={6}>
            <p className='text-center text-md-start mb-5' style={{color:'rgba(102, 102, 102, 1)',fontFamily:'Open Sans',fontSize:'15px',fontWeight:'400'}}>
            Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique,
            </p>
           
            </Col>
        </Row>
        </div>
        <Row className='m-0 p-4' style={{backgroundColor:'rgba(42, 42, 42, 1)'}}>
        <Col md={6}className='py-3 ps-4'>
          <h1 className='text-light text-center text-md-start' style={{ fontFamily:'rubik', fontSize:'30px', fontWeight:'700' }}>Get Free Consultation</h1>
        </Col>
        <Col md={6} className='py-3 d-flex justify-content-center align-items-center'>
          <Basicbutton style={buttonStyles1} children={"ONLINE ESTIMATE FORM"} />
        </Col>
      </Row>
 
      

            </Col>
        </Row>
       
    </Container>
      
    </div>
  )
}

export default EcoFriendly
