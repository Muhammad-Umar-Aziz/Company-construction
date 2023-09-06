import React from 'react'
import ReusableCrd from '../../Reuseable Components/ReusableCrd';
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import img from '../../Assests/underline.svg';
import img1 from '../../Assests/ser-1.svg';
import img2 from '../../Assests/ser-2.svg';
import img3 from '../../Assests/ser-3.svg';
import Basicbutton from '../../Reuseable Components/Basicbutton';

const LatestProjectServices = () => {

    const buttonStyleslower = {
        borderRadius: '0',
        border: '5px solid rgba(31, 31, 31, 1)',
        backgroundColor: 'white',
        fontFamily: 'Rubik, sans-serif',
        fontWeight: 600,
        fontSize: '14px',
        padding: '12px 50px',
        cursor: 'pointer',
        color: 'rgba(31, 31, 31, 1)',
      };
      const buttonStyles = {
        borderRadius: '0',
        border: '1px solid rgba(102, 102, 102, 1)',
        backgroundColor: 'white',
        fontFamily: 'Open Sans',
        fontWeight: 900,
        fontSize: '11px',
        padding: '5px 32px',
        cursor: 'pointer',
        color: 'rgba(102, 102, 102, 1)',
      };
    
    
      const cardBackgroundColor = 'white';
  return (
    <div>
     <Container fluid>
            <Container>
            <Row className='g-0'>
            <h1 style={{ fontFamily: 'Rubik', fontWeight: '700', fontSize: '40px' }} className='text-center pt-5'>
              Related Projects
            </h1>
            <div className='d-flex justify-content-center py-5'>
              <img src={img} alt='Underline' />
            </div>
          </Row>
              
               <Row>
                <Col md={4} className='d-flex justify-content-center'>
                  <ReusableCrd
                    imgSrc={img1}
                    title='Project Title'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas.'
                    backgroundColor={cardBackgroundColor}
                    buttonStyles={buttonStyles}
                  />
                </Col>
                <Col md={4} className='d-flex justify-content-center'>
                  <ReusableCrd
                    imgSrc={img2}
                    title='Project Title'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas.'
                    backgroundColor={cardBackgroundColor}
                    buttonStyles={buttonStyles}
                  />
                </Col>
                <Col md={4} className='d-flex justify-content-center'>
                  <ReusableCrd
                    imgSrc={img3}
                    title='Project Title'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas.'
                    backgroundColor={cardBackgroundColor}
                    buttonStyles={buttonStyles}
                  />
                </Col>
              </Row>
              <div className='d-flex justify-content-center py-5'>
            <Basicbutton style={buttonStyleslower}>VIEW ALL</Basicbutton>
          </div>
              </Container>
              </Container>
      
    </div>
  )
}

export default LatestProjectServices
