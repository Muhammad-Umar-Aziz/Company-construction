import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import img1 from '../../Assests/home-1.svg'
import img2 from '../../Assests/home-2.svg'
import img3 from '../../Assests/home-3.svg'
import img4 from '../../Assests/home-4.svg'
import img5 from '../../Assests/home-5.svg'
import img6 from '../../Assests/home-6.svg'


const SixPortions = () => {
  return (
    <div>
    <Container>
        <Row>
            <Col md={4}>
            <div className="d-flex p-5">
          <div className="pt-2">
          <img src={img1}/>
          </div>
           <div className="ps-3">
            <h5 style={{fontFamily:'rubik',fontWeight:'700',fontSize:'16px'}} className='text-center text-md-start'>Building Construction</h5>
            <p className="text-center text-md-start" style={{color:'rgba(102, 102, 102, 1)',fontFamily:'Open Sans',fontSize:'15px',fontWeight:'400'}}>Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat</p>
            </div>
          </div>
            </Col>
            <Col md={4}>
            <div className="d-flex p-5">
          <div className="pt-2">
          <img src={img2}/>
          </div>
           <div className="ps-3">
            <h5 style={{fontFamily:'rubik',fontWeight:'700',fontSize:'16px'}} className='text-center text-md-start'>Building Repairs</h5>
            <p className="text-center text-md-start" style={{color:'rgba(102, 102, 102, 1)',fontFamily:'Open Sans',fontSize:'15px',fontWeight:'400'}}>Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat</p>
            </div>
          </div>
            </Col>
            <Col md={4}>
            <div className="d-flex p-5">
          <div className="pt-2">
          <img src={img3}/>
          </div>
           <div className="ps-3">
            <h5 style={{fontFamily:'rubik',fontWeight:'700',fontSize:'16px'}} className='text-center text-md-start'>Demolition</h5>
            <p className="text-center text-md-start" style={{color:'rgba(102, 102, 102, 1)',fontFamily:'Open Sans',fontSize:'15px',fontWeight:'400'}}>Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat</p>
            </div>
          </div>
            </Col>
        </Row>
        <Row>
            <Col md={4}>
            <div className="d-flex p-5">
          <div className="pt-2">
          <img src={img4}/>
          </div>
           <div className="ps-3">
            <h5 style={{fontFamily:'rubik',fontWeight:'700',fontSize:'16px'}} className='text-center text-md-start'>Foundation</h5>
            <p className="text-center text-md-start" style={{color:'rgba(102, 102, 102, 1)',fontFamily:'Open Sans',fontSize:'15px',fontWeight:'400'}}>Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat</p>
            </div>
          </div>
            </Col>
            <Col md={4}>
            <div className="d-flex p-5">
          <div className="pt-2">
          <img src={img5}/>
          </div>
           <div className="ps-3">
            <h5 style={{fontFamily:'rubik',fontWeight:'700',fontSize:'16px'}} className='text-center text-md-start'>Painting & Exterior</h5>
            <p className="text-center text-md-start" style={{color:'rgba(102, 102, 102, 1)',fontFamily:'Open Sans',fontSize:'15px',fontWeight:'400'}}>Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat</p>
            </div>
          </div>
            </Col>
            <Col md={4}>
            <div className="d-flex p-5">
          <div className="pt-2">
          <img src={img6}/>
          </div>
           <div className="ps-3">
            <h5 style={{fontFamily:'rubik',fontWeight:'700',fontSize:'16px'}} className='text-center text-md-start'>Site Management</h5>
            <p className="text-center text-md-start" style={{color:'rgba(102, 102, 102, 1)',fontFamily:'Open Sans',fontSize:'15px',fontWeight:'400'}}>Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat</p>
            </div>
          </div>
            </Col>
        </Row>
    </Container>
      
    </div>
  )
}

export default SixPortions
