import React from 'react'
import Header from '../../Reuseable Components/Header'
import ServicesHeader from './ServicesHeader'
import BuildingConstruction from './BuildingConstruction'
import GetAQuoteServices from './GetAQuoteServices'
import RepairsAndInstallation from './RepairsAndInstallation'
import CustomDesign from './CustomDesign'
import Footer from '../../Pages/Main Page/Footer'
import LatestProjectServices from './LatestProjectServices'


const ServicesPage = () => {

  return (
    <div>
    <Header/>
    <ServicesHeader/>
    <GetAQuoteServices/>
    <BuildingConstruction/>
    <RepairsAndInstallation/>
    <CustomDesign/>
    <LatestProjectServices/>
   
    
    <Footer/>
      
    </div>
  )
}

export default ServicesPage
