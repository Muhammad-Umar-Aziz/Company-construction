import React from 'react'
import Mainpage from './Pages/Main Page/Mainpage'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ProjectPage from './Pages/Project/ProjectPage'
import Blogpage from './Pages/Blog/Blogpage'
import PortFolioPage from './Pages/Portfolio/PortFolioPage'
import ServicePage from './Pages/Service/ServicePage'
import ServicesPage from './Pages/Services/ServicesPage'
import ContactPage from './Pages/Contact/ContactPage'
import AboutPage from './Pages/About/AboutPage'
import HomePage from './Pages/Home/HomePage'

const Rootaapfile = () => {
  return (
    <div>
         <BrowserRouter>
      <Routes>
        <Route path='/' element={<Mainpage/>}></Route>
        <Route path='/project' element={<ProjectPage/>}/>
        <Route path='/blog' element={<Blogpage/>}/>
        <Route path='/portfolio' element={<PortFolioPage/>}/>
        <Route path='/service' element={<ServicePage/>}/>
        <Route path='/services' element={<ServicesPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        </Routes>
    </BrowserRouter>
      
    </div>
  )
}

export default Rootaapfile
