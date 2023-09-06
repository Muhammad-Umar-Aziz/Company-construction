import React from 'react'
import Header from '../../Reuseable Components/Header'
import ContactHeader from '../../Pages/Contact/ContactHeader'
import CallSection from './CallSection'
import GetInTouchContact from './GetInTouchContact'
import ImageOfFooter from './ImageOfFooter'
import '../../Pages/Contact/ContactStyle.scss'

const ContactPage = () => {
  return (
    <div>
    <Header/>
    <ContactHeader/>
    <CallSection/>
    <GetInTouchContact/>
    <ImageOfFooter/>
    </div>
  )
}

export default ContactPage
