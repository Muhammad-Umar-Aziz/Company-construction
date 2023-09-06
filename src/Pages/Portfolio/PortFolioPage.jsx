import React from 'react'
import Header from '../../Reuseable Components/Header'
import { Container } from 'react-bootstrap'
import PortfolioHeader from './PortfolioHeader'
import '../../Pages/Portfolio/PortfolioStyle.scss'
import PortFolioCards from './PortFolioCards'
import Footer from '../Main Page/Footer'
import HaveAProject from './HaveAProject'

const PortFolioPage = () => {
  return (
    <div>
    <Header/>
    <Container fluid>
    <PortfolioHeader/>
    <PortFolioCards/>
    </Container>
    <HaveAProject/>
    <Footer/>
    </div>
  )
}

export default PortFolioPage
