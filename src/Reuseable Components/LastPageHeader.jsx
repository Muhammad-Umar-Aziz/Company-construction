import React from 'react'
import { Container } from 'react-bootstrap';
import Basicbutton from './Basicbutton';
import img from '../Assests/underline.svg'
import '../Pages/Home/Homestyle.scss'

const LastPageHeader = ({ backgroundImage, heading, paragraph, buttonLabel }) => {

    const buttonStyles = {
        borderRadius: '0',
        border: 'none',
        backgroundColor: 'rgba(255, 180, 0, 1)',
        fontFamily: 'Rubik, sans-serif',
        fontWeight: 600,
        fontSize: '14px',
        padding: '12px 30px',
        cursor: 'pointer',
      };
    
      const containerStyle = {
        backgroundImage: `url(${backgroundImage})`,
      };
  return (
    <div>

<div>
      <Container fluid className='home_bg_img' style={containerStyle}>
        <div>
          <div className='home_paddings'>
            <div className='d-flex justify-content-center'>
              <img src={img} alt="Underline" />
            </div>
            <div className='d-flex pb-4 d-flex justify-content-center'>
              <h1 className='text-light home_heaading_font ps-4 pt-4 text-center'>{heading}</h1>
            </div>
            <p className='text-light home_paragraph_font mb-5 text-center'>
              {paragraph}
            </p>
            <div className='d-flex justify-content-center'>
              <Basicbutton style={buttonStyles}>{buttonLabel}</Basicbutton>
            </div>
          </div>
        </div>
      </Container>
    </div>
      
    </div>
  )
}

export default LastPageHeader
