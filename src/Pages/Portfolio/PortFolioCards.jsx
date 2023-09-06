import React from 'react'
import ReusableCrd from '../../Reuseable Components/ReusableCrd';
import { Button, Col, Container, Row } from 'react-bootstrap'
import img1 from '../../Assests/p-1.svg';
import img2 from '../../Assests/p-2.svg';
import img3 from '../../Assests/p-3.svg';
import img4 from '../../Assests/p-4.svg';
import img5 from '../../Assests/p-5.svg';
import img6 from '../../Assests/p-6.svg';
import img7 from '../../Assests/p-7.svg';
import img8 from '../../Assests/p-8.svg';
import img9 from '../../Assests/p-9.svg';


const PortFolioCards = () => {
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
              <Row>
                <Col md={4} className='d-flex justify-content-center'>
                  <ReusableCrd
                    imgSrc={img4}
                    title='Project Title'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas.'
                    backgroundColor={cardBackgroundColor}
                    buttonStyles={buttonStyles}
                  />
                </Col>
                <Col md={4} className='d-flex justify-content-center'>
                  <ReusableCrd
                    imgSrc={img5}
                    title='Project Title'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas.'
                    backgroundColor={cardBackgroundColor}
                    buttonStyles={buttonStyles}
                  />
                </Col>
                <Col md={4} className='d-flex justify-content-center'>
                  <ReusableCrd
                    imgSrc={img6}
                    title='Project Title'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas.'
                    backgroundColor={cardBackgroundColor}
                    buttonStyles={buttonStyles}
                  />
                </Col>
              </Row>
              <Row>
                <Col md={4} className='d-flex justify-content-center'>
                  <ReusableCrd
                    imgSrc={img7}
                    title='Project Title'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas.'
                    backgroundColor={cardBackgroundColor}
                    buttonStyles={buttonStyles}
                  />
                </Col>
                <Col md={4} className='d-flex justify-content-center'>
                  <ReusableCrd
                    imgSrc={img8}
                    title='Project Title'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas.'
                    backgroundColor={cardBackgroundColor}
                    buttonStyles={buttonStyles}
                  />
                </Col>
                <Col md={4} className='d-flex justify-content-center'>
                  <ReusableCrd
                    imgSrc={img9}
                    title='Project Title'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas.'
                    backgroundColor={cardBackgroundColor}
                    buttonStyles={buttonStyles}
                  />
                </Col>
              </Row>
              </Container>
          </Container>
        </div>
      );
    }

export default PortFolioCards
