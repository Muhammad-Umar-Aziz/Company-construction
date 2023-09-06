import React from 'react'
import '../../Pages/Portfolio/PortfolioStyle.scss'
import { Row,Col,Container } from 'react-bootstrap'
import img from '../../Assests/line.svg';
const PortfolioHeader = () => {
    const SettingsArray =[
        {
            text: "Monarch HQ Project",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut.",
        }
          ] 
      return (
        <div>
        <Container fluid className='portfolio-bg-img mb-5'>
        <Row>
          <Col md={8}>
          
          <div className='portfolio_basic_banner'>
                <div className='d-flex justify-content-center justify-content-md-start pb-4'>
                    <img src={img}/>
                    <h1 className='portfolio_heaading_font text-white ps-4 pt-4 text-center text-md-start'>Our Construction Projects</h1>
                </div>
                     <p className='text-white portfolio_paragraph_font mb-5 text-center text-md-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut. </p>
                     <div className='d-flex justify-content-center justify-content-md-start'>
                   </div>
                     
                </div>
            
          </Col>
          <Col md={4}>

          </Col>
        </Row>
    </Container>
    </div>
  )
}

export default PortfolioHeader
