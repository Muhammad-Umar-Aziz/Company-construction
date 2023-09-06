import React from 'react'
import Header from '../../Reuseable Components/Header'
import '../Blog/BlogStyle.scss'
import { Container, Row,Col } from 'react-bootstrap'
import img from '../../Assests/line.svg'
import BlogCardSection from './BlogCardSection'
import FooterOfBlog from './FooterOfBlog'

const Blogpage = () => {
  return (
    <div>
      <Header/>
      <Container fluid className='blog-bg-img pb-5'>
        <Row>
        <Col md={12} className='blog_basic_banner'>
        <div className='d-flex justify-content-center justify-content-md-start pb-4'>
                <img src={img}/>
                <h1 className='blog_heaading_font text-white ps-4 pt-4 text-center text-md-start'>News</h1>
            </div>
        </Col>

        </Row>
      </Container>
      <BlogCardSection/>
      <FooterOfBlog/>
      
    </div>
  )
}

export default Blogpage
          