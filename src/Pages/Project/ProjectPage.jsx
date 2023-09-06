import React from 'react'
import Projectheader from './Projectheader'
import AboutThisProject from './AboutThisProject'
import Header from '../../Reuseable Components/Header'
import RelatedProjects from './RelatedProjects'
import Footer from '../../Pages/Main Page/Footer';


const ProjectPage = () => {
  return (
    <div>
     <Header/>
    <Projectheader/>
    <AboutThisProject/>
    <RelatedProjects/>
    <Footer/>
      
    </div>
  )
}

export default ProjectPage
