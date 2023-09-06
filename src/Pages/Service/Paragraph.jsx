import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Paragraph = () => {
  return (
    <div>
     <Container>
        <Row>
            <Col md={6} className='p-5'>
            <p className='text-center text-md-start' style={{color:'rgba(102, 102, 102, 1)', fontFamily: 'Open Sans', fontWeight: '400', fontSize: '15px'}}>
            Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue, non feugiat ligula neque nec felis.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed nibh dignissim, cursus tellus sit amet, ultrices mauris. Aliquam blandit est in eros elementum, quis vehicula est suscipit. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. 
            </p>

            </Col>
            <Col md={6} className='p-5'>
            <p className='text-center text-md-start mb-3' style={{color:'rgba(102, 102, 102, 1)', fontFamily: 'Open Sans', fontWeight: '400', fontSize: '15px'}}>
            Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue non feugiat ligula neque nec felis.

Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. 
            </p>

            </Col>
        </Row>
     </Container>
    </div>
  )
}

export default Paragraph
