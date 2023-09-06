import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import img1 from '../../Assests/underline.svg';
import Basicbutton from '../../Reuseable Components/Basicbutton';

const NoProjectTo = () => {
  const buttonStyles = {
    borderRadius: '0',
    border: '5px solid rgba(31, 31, 31, 1)',
    backgroundColor: 'rgba(247, 247, 247, 1)',
    fontFamily: 'Rubik, sans-serif',
    fontWeight: 600,
    fontSize: '14px',
    padding: '12px 32px',
    cursor: 'pointer',
    color: 'rgba(31, 31, 31, 1)',
  };

  return (
    <div>
      <Container fluid>
        <Row>
        <Col md={4} className='m-0 p-0 No_bg_img'>

        </Col>

          <Col md={8} style={{ backgroundColor: 'rgba(247, 247, 247, 1)' }} className="d-flex justify-content-between flex-column">
            <div className="NoProjectTo_Paddings">
              <h1 style={{ fontFamily: 'rubik', fontSize: '40px', fontWeight: '700' }} className="pb-4 text-center text-md-start">No Project Too Big Or Too Small</h1>
               <div className='d-flex justify-content-center justify-content-md-start pb-2'>
               <img src={img1} alt="Underline" />
               </div>
             
              <Row className="d-flex">
                <Col md={6} style={{ fontFamily: 'Open Sans', fontSize: '15px', fontWeight: '400' }} className="text-center text-md-start pe-md-5 pe-sm-0 pt-md-5 pt-sm-5">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. Scelerisque lorem posuere iaculis nunc amet phasellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam.  </p>
                </Col>
                <Col md={6} style={{ fontFamily: 'Open Sans', fontSize: '15px', fontWeight: '400' }} className="text-center text-md-start pe-md-5 pe-sm-0 pt-md-5 pt-sm-5 pb-md-5 pb-sm-0">
                  <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. Scelerisque lorem posuere iaculis nunc amet phasellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam.  </p>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <p style={{ fontFamily: 'Open Sans', fontSize: '15px', fontWeight: '400' }} className="text-center text-md-start pe-md-5 pe-sm-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam.  </p>
                </Col>
                <Col md={6} className="d-flex justify-content-center justify-content-md-start">
                  <Basicbutton style={buttonStyles} children={"LEARN MORE"} />
                </Col>
              </Row>
            </div>
            <Row>
              <Col md={6} style={{ backgroundColor: 'rgba(255, 180, 0, 1)' }} className="text-center py-3">
                <h1 style={{ fontFamily: 'rubik', fontSize: '40px', fontWeight: '700' }}>12</h1>
                <p style={{ fontFamily: 'rubik', fontSize: '12px', fontWeight: '700' }}>YEARS ESTABLISHED</p>
              </Col>
              <Col md={6} style={{ backgroundColor: 'rgba(42, 42, 42, 1)' }} className="text-center text-light py-3">
                <h1 style={{ fontFamily: 'rubik', fontSize: '40px', fontWeight: '700' }}>250</h1>
                <p style={{ fontFamily: 'rubik', fontSize: '12px', fontWeight: '700' }}>COMPLETED PROJECTS</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NoProjectTo;
