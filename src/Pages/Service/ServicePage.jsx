import React from 'react'
import Header from '../../Reuseable Components/Header'
import '../../Pages/Service/ServiceStyle.scss'
import ServiceHeader from './ServiceHeader'
import Paragraph from './Paragraph'
import AboutProcess from './AboutProcess'
import RelatedServices from './RelatedServices'
import FAQSection from './FAQSection'
import Footer from '../../Pages/Main Page/Footer'
;


const ServicePage = () => {



  return (
    <div>
    <Header/>
    <ServiceHeader/>
    <Paragraph/>
    <AboutProcess/>
    <RelatedServices/>
    <FAQSection/>
    <Footer/>
  </div>
  )
}

export default ServicePage
