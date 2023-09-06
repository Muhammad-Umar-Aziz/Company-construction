import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import leftline from '../../Assests/line.svg';
import Basicbutton from '../../Reuseable Components/Basicbutton';
import img1 from '../../Assests/s-t-1.svg';
import img2 from '../../Assests/s-t-2.svg';
import img3 from '../../Assests/s-t-3.svg';
import TransparentHeaderBanner from '../../Reuseable Components/TransparentHeaderBanner';

const ServiceHeader = () => {
  const buttonStyles = {
    borderRadius: '0',
    border: 'none',
    backgroundColor: 'rgba(255, 180, 0, 1)',
    fontFamily: 'Rubik, sans-serif',
    fontWeight: 600,
    fontSize: '14px',
    padding: '12px 23px',
    cursor: 'pointer',
  };

  return (
    <div>
      <Container fluid className='service_bg_img'>
        <Row>
          <Col md={8}>
            <div className='service_basic_banner'>
              <div className='d-flex pb-4 d-flex justify-content-center justify-content-md-start'>
                <img src={leftline} />
                <h1 className='text-light service_heaading_font ps-4 pt-4'>Framing</h1>
              </div>
              <p className='text-light service_paragraph_font mb-5 text-center text-md-start'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut.{' '}
              </p>
              <div className='d-flex justify-content-center justify-content-md-start'>
                <Basicbutton style={buttonStyles}>GET A QUOTE</Basicbutton>
              </div>
            </div>
          </Col>
          <Col md={4} className='bg_color pt-5'>
            <div className='p-5'>
              {/* <h1 style={{ fontFamily: 'rubik', fontWeight: '700', color: 'rgba(255, 180, 0, 1)' }} className='pb-3 text-center text-md-start'>
                Our Services
              </h1> */}
              <TransparentHeaderBanner imgSrc={img1} title="Building Construction" description="Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat" />
              <TransparentHeaderBanner  imgSrc={img2} title="Foundation Work" description="Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat" />
              <TransparentHeaderBanner  imgSrc={img3} title="Site Management" description="Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceHeader;
