import React from 'react'
import '../About/AboutStyle.scss'
import Header from '../../Reuseable Components/Header'
import AboutHeader from './AboutHeader'
import AboutDiviConstruction from './AboutDiviConstruction'
import OnlyTheBest from './OnlyTheBest'
import Suspendices from './Suspendices'
import Footer from '../Main Page/Footer'
const AboutPage = () => {
  return (
    <div>
    <Header/>
    <AboutHeader/>
    <AboutDiviConstruction/>
    <OnlyTheBest/>
    <Suspendices/>
    <Footer/>
   </div>
  )
}

export default AboutPage
