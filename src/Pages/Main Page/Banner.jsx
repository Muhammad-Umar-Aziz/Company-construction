import React from "react";
import Basicbanner from "../../Reuseable Components/Basicbanner";
import { Col, Container, Row } from "react-bootstrap";
import img1 from '../../Assests/b-1-1.svg';
import img2 from '../../Assests/b-1-2.svg';
import img3 from '../../Assests/b-1-3.svg';
import Basicbannercard from "../../Reuseable Components/Basicbannercard";
import "./Mainstyle.scss";

const Banner = () => {

  const SettingsArray =[
        {
            text: "Construction",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut. Mi nibh amet viverra id aliquet neque odio.",
        }
          ] 
          return (
    <div>
        <Container fluid>
        <Row>
          <Col md={8} className="Main_Bg_Img">
           <Basicbanner settings={SettingsArray} />
           </Col>
           <Col md={4} className="Main_Bg_Color">
      <div className="p-5">
        <h1 className="Banner_Headings_Fonts pb-3 text-center text-md-start">Our Services</h1>
          <Basicbannercard title="Building Construction" description="Lorem ipsum dolor sit consectetur adipiscing elit." imageSrc={img1}/>
          <Basicbannercard title="Foundation Work" description="Lorem ipsum dolor sit consectetur adipiscing elit." imageSrc={img2}/>
          <Basicbannercard title="Site Management" description="Lorem ipsum dolor sit consectetur adipiscing elit." imageSrc={img3}/>
      </div>
    </Col>
      </Row>
      </Container>
   
      
    </div>
  );
};

export default Banner;
