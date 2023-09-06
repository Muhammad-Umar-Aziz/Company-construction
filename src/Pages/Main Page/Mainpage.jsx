import React from 'react'
import './Mainstyle.scss';
import Header from '../../Reuseable Components/Header';
import Banner from './Banner';
import GetAQuote from './GetAQuote';
import NoProjectTo from './NoProjectTo';
import CardSection from './CardSection';
import Videosection from './Videosection';
import LetsBuildSomething from './LetsBuildSomething';
import ClientTestimonials from './ClientTestimonials';
import Footer from './Footer';


const Mainpage = () => {
  return (
    <div>
     <Header/>
     <Banner/>
     <GetAQuote/>
     <NoProjectTo/>
     <CardSection/>
     <Videosection/>
     <LetsBuildSomething/>
     <ClientTestimonials/>
     <Footer/>
     </div>
    )
}

export default Mainpage
