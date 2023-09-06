import React from 'react'
import Header from '../../Reuseable Components/Header'
import HomeHeader from './HomeHeader'
import WeHaveBeen from './WeHaveBeen'
import SixPortions from './SixPortions'
import EcoFriendly from './EcoFriendly'
import ClientTestimonials from '../../Pages/Main Page/ClientTestimonials'
import Footer from '../../Pages/Main Page/Footer'

const HomePage = () => {
  return (
    <div>
    <Header/>
    <HomeHeader/>
    <SixPortions/>
    <EcoFriendly/>
    <WeHaveBeen/>
    <ClientTestimonials/>
    <Footer/>
    </div>
  )
}

export default HomePage
