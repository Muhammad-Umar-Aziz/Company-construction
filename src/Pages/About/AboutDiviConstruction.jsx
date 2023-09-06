import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img from '../../Assests/underline.svg'

const AboutDiviConstruction = () => {
  return (
    <div>
    <h1 className='text-center py-5' style={{ fontFamily: 'Rubik', fontWeight: '700', fontSize: '40px' }}>About Divi Construction</h1>
    <div className='d-flex justify-content-center'>
            <img src={img}/>
            </div>
    <Container>
        <Row className='g-0'>
            <Col md={6}>
                <p className='text-center text-md-start mb-4 p-5' style={{color:'rgba(102, 102, 102, 1)',fontFamily:'Open Sans',fontSize:'15px',fontWeight:'400'}}>Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue, non feugiat ligula neque nec felis.<br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed nibh dignissim, cursus tellus sit amet, ultrices mauris. Aliquam blandit est in eros elementum, quis vehicula est suscipit.</p>
            </Col>

            <Col md={6}>
            <p className='text-center text-md-start mb-4 p-5' style={{color:'rgba(102, 102, 102, 1)',fontFamily:'Open Sans',fontSize:'15px',fontWeight:'400'}}>
            Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue non feugiat ligula neque nec felis.
            </p>
           
            </Col>
        </Row>
    </Container>
      
    </div>
  )
}

export default AboutDiviConstruction
