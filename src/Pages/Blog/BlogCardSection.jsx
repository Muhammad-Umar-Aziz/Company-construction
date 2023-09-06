import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import '../Blog/BlogStyle.scss'
import img1 from '../../Assests/blog-1.png'
import img2 from '../../Assests/blog-2.svg'
import img3 from '../../Assests/blog-3.svg'
import img4 from '../../Assests/blog-4.svg'
import img5 from '../../Assests/blog-5.svg'
import img6 from '../../Assests/blog-6.svg'
import BlogBasicCard from '../../Reuseable Components/BlogBasicCard'

const BlogCardSection = () => {

    return (
    <div>
     <Container fluid style={{ backgroundColor: 'rgba(247, 247, 247, 1)' }}>
     <Container>
      <Row className='pt-5'>
        <Col md={4} className='d-flex justify-content-center mb-5'>
          <BlogBasicCard
            imageSrc={img1}
            title='Nunc Volutpat Venenatis'
            dateCategory='May 9, 2014 | Category'
            description='Nulla a odio sed magna congue condimentum. Pellentesque convallis enim nec libero vulputate, et rhoncus urna placerat. Phasellus mattis, diam vel vehicula facilisis, erat leo dapibus augue, at mollis tellus ex non nisi.'
          />
        </Col>
        <Col md={4} className='d-flex justify-content-center  mb-5'>
          <BlogBasicCard
            imageSrc={img2}
            title='Vestibulum Nisl Felis'
            dateCategory='May 9, 2014 | Category'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet. '
          />
        </Col>
        <Col md={4} className='d-flex justify-content-center  mb-5'>
          <BlogBasicCard
            imageSrc={img3}
            title='Proin Eu Augue Efficitur'
            dateCategory='May 9, 2014 | Category'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet. '
          />
        </Col>
       </Row>
       <Row className='pt-5'>
        <Col md={4} className='d-flex justify-content-center mb-5'>
          <BlogBasicCard
            imageSrc={img4}
            title='Nunc Volutpat Venenatis'
            dateCategory='May 9, 2014 | Category'
            description='Nulla a odio sed magna congue condimentum. Pellentesque convallis enim nec libero vulputate, et rhoncus urna placerat. Phasellus mattis, diam vel vehicula facilisis, erat leo dapibus augue, at mollis tellus ex non nisi. Maecenas urna sapien, dignissim a augue vitae, porttitor luctus urna. Morbi scelerisque semper congue. '
          />
        </Col>
        <Col md={4} className='d-flex justify-content-center  mb-5'>
          <BlogBasicCard
            imageSrc={img5}
            title='Donec Sit Amet Nibh'
            dateCategory='May 9, 2014 | Category'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet.  '
          />
        </Col>
        <Col md={4} className='d-flex justify-content-center  mb-5'>
          <BlogBasicCard
            imageSrc={img6}
            title='Maecenas Fringilla Augue'
            dateCategory='May 9, 2014 | Category'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet.Donec quis felis imperdiet, vestibulum est ut, pulvinar dolor.  '
          />
        </Col>
       </Row>
       </Container>
    </Container>
  
    </div>
  );
}

export default BlogCardSection
