import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img from '../../Assests/underline.svg'
import Basicbutton from '../../Reuseable Components/Basicbutton'
import ListReUsable from '../../Reuseable Components/ListReUsable'

const RepairsAndInstallation = () => {

  
  const listData = [
    'Maecenas ornare nisl',
    'A tortor ultrices bibendum',
    'ulla fermentum',
    'Metus quis',
    'Sodales tristique',
  ];
    
    const buttonStyles = {
        borderRadius: '0',
        border: '5px solid white',
        backgroundColor:'rgba(42, 42, 42, 1)',
        fontFamily: 'Rubik, sans-serif',
        fontWeight: 600,
        fontSize: '14px',
        padding: '12px 32px',
        cursor: 'pointer',
        color: ' white',
        
      };
      const buttonStyles1 = {
        borderRadius: '0',
        border: '5px solid white',
        backgroundColor:'rgba(255, 180, 0, 1)',
        fontFamily: 'Rubik, sans-serif',
        fontWeight: 600,
        fontSize: '14px',
        padding: '12px 32px',
        cursor: 'pointer',
        color: ' white',
        
      };
  return (
    <div>
     <Container fluid className='mt-5'>
        <Row>
            
            <Col md={9}>
            <div className='box_paddings'>
            <h1 className='text-center text-md-start building_heading'>Repairs & Installations</h1>
            <div className='d-flex justify-content-center justify-content-md-start py-3'>
            <img src={img}/>
            </div>
           
            <p className='text-center text-md-start'  style={{ fontFamily: 'Open Sans', fontWeight: '400', fontSize: '15px' }}>Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. </p>
            <Row>
            <Col md={3}>
               
               <ListReUsable listData={listData} />
             </Col>
             <Col md={4}>
          
               <ListReUsable listData={listData} />
             </Col>
             <Col md={4}>
             
               <ListReUsable listData={listData} />
             </Col>
            </Row>

            </div>
          
            
            <Row>
              <Col md={6} style={{ backgroundColor: 'rgba(42, 42, 42, 1)' }} className="text-center py-5">
              <Basicbutton style={buttonStyles} children={"FREE QUOTE"}/>
                 </Col>
              <Col md={6} style={{ backgroundColor: 'rgba(255, 180, 0, 1)' }} className="text-center text-light py-5">
              <Basicbutton style={buttonStyles1} children={"LEARN MORE"}/>
              </Col>
            </Row>
           
           
             
            </Col>
            <Col md={2}>
            
            </Col>
        </Row>
        
    </Container>
      
    </div>
  )
}

export default RepairsAndInstallation
