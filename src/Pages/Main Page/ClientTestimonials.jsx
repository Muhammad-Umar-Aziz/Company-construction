import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import img from '../../Assests/Star 1.png';
import img1 from '../../Assests/underline.svg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img2 from '../../Assests/Clients.svg';

const ClientTestimonials = () => {

    const settings = {

      prevArrow: <></>,
      nextArrow: <></>,

        autoplay: true,
        autoplaySpeed: 2000,
       
        speed: 900,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    
  return (
    <div>
    <Container fluid style={{backgroundColor:'rgba(247, 247, 247, 1)'}}>
    <Container>
    <h1 style={{ fontFamily: 'Rubik', fontWeight: '700', fontSize: '40px' }} className='text-center p-3 p-md-5'>Client Testimonials</h1>
     <div className='d-flex justify-content-center pb-5'>
     <img src={img1}/>
     </div>
     <Row>
    <Slider {...settings} className='p-0 m-0'>
          <div className='d-flex justify-content-center m-2'>
          <Card style={{padding:'10px,10px',margin:'2rem'}} className='border border-0'>
    <Card.Body>
    <div className='d-flex justify-content-center'>
    <img src={img}/>
      <img src={img}/>
      <img src={img}/>
      <img src={img}/>
      <img src={img}/>
      </div>
      <Card.Text style={{fontFamily:'Open Sans',fontSize:'15px',fontWeight:'400'}} className='text-muted py-4 text-center text-md-start'>
      “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam.”
      </Card.Text>
      <Card.Title style={{ fontFamily: 'Rubik', fontWeight: '500', fontSize: '16px' }} className='text-center text-md-start'>John Smith</Card.Title>
     </Card.Body>
    </Card>

          </div>
          <div className='d-flex justify-content-center m-2'>
          <Card style={{padding:'10px,10px',margin:'2rem'}}  className='border border-0'>
    <Card.Body>
    <div className='d-flex justify-content-center'>
    <img src={img}/>
      <img src={img}/>
      <img src={img}/>
      <img src={img}/>
      <img src={img}/>
      </div>
      <Card.Text style={{fontFamily:'Open Sans',fontSize:'15px',fontWeight:'400'}} className='text-muted py-4 text-center text-md-start'>
      “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam.”
      </Card.Text>
      <Card.Title style={{ fontFamily: 'Rubik', fontWeight: '500', fontSize: '16px' }} className='text-center text-md-start'>John Smith</Card.Title>
     </Card.Body>
    </Card>

          </div>
          <div className='d-flex justify-content-center m-2'>
          <Card style={{padding:'10px,10px',margin:'2rem'}} className='border border-0'>
    <Card.Body>
    <div className='d-flex justify-content-center'>
    <img src={img}/>
      <img src={img}/>
      <img src={img}/>
      <img src={img}/>
      <img src={img}/>
      </div>
      <Card.Text style={{fontFamily:'Open Sans',fontSize:'15px',fontWeight:'400'}} className='text-muted py-4 text-center text-md-start'>
      “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam.”
      </Card.Text>
      <Card.Title style={{ fontFamily: 'Rubik', fontWeight: '500', fontSize: '16px' }} className='text-center text-md-start' >John Smith</Card.Title>
     </Card.Body>
    </Card>

          </div>
          <div className='d-flex justify-content-center m-2'>
          <Card style={{padding:'10px,10px',margin:'2rem'}} className='border border-0'>
    <Card.Body>
    <div className='d-flex justify-content-center'>
    <img src={img}/>
      <img src={img}/>
      <img src={img}/>
      <img src={img}/>
      <img src={img}/>
      </div>
      <Card.Text style={{fontFamily:'Open Sans',fontSize:'15px',fontWeight:'400'}} className='text-muted py-4 text-center text-md-start'>
      “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam.”
      </Card.Text>
      <Card.Title style={{ fontFamily: 'Rubik', fontWeight: '500', fontSize: '16px' }} className='text-center text-md-start'>John Smith</Card.Title>
     </Card.Body>
    </Card>

          </div>
         

         
        </Slider>
     </Row>
     <Row className="justify-content-center">
  <div className='p-3 p-md-5 d-flex justify-content-center'>
    <img src={img2} style={{ width: '100%', maxWidth: '1000px' }}/>
  </div>
</Row>

     </Container>
   </Container>
    
      
    </div>
  )
}

export default ClientTestimonials
