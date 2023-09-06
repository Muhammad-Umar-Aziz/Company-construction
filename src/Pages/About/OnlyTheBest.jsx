import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "../../Assests/right-arrows.svg";
import "../../Pages/About/AboutStyle.scss";
import OnlyTheBestReuseable from "../../Reuseable Components/OnlyTheBestReuseable";
import Basicbutton from "../../Reuseable Components/Basicbutton";
import img1 from '../../Assests/About-img.svg'

const OnlyTheBest = () => {
  const buttonStyles = {
    borderRadius: "0",
    border: "5px solid rgba(255, 180, 0, 1)",
    backgroundColor: "rgba(247, 247, 247, 1)",
    fontFamily: "Rubik, sans-serif",
    fontWeight: 600,
    fontSize: "14px",
    padding: "7px 50px",
    cursor: "pointer",
    color: " rgba(255, 180, 0, 1)",
  };
  return (
    <div>
      <Container fluid className="ps-0">
        <Row>
        <Col lg={3} style={{backgroundColor:'rgba(247, 247, 247, 1)'}}>
        <div className="p-5 d-flex flex-column align-items-center">
        <h1 style={{ fontFamily: 'Rubik', fontWeight: '700', fontSize: '32px' }} className='py-3 text-center text-md-start'>Only the Best</h1>
          
            <OnlyTheBestReuseable
            title="Eco Friendly Construction"
            imageSrc={img}
            description="Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi."
            />
        
           <OnlyTheBestReuseable
            title="The Newest Technology Repairs"
            imageSrc={img}
            description="Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi."
             />
            <OnlyTheBestReuseable
            title="High Quality Construction Management"
            imageSrc={img}
            description="Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi."
          />
             <div className='d-flex justify-content-center justify-content-md-end'>
              <Basicbutton style={buttonStyles} children={"FREE QUOTE"} />
             </div>
             </div>
             </Col>
        
         
          <Col lg={9} className="d-flex flex-column justify-content-end">
            <Row>
            <Col md={12} className="g-0">
              <img src={img1} className="img-fluid w-100"/>
            </Col>
               
            </Row>

            <Row>
              <Col
                md={6}
                style={{ backgroundColor: "rgba(255, 180, 0, 1)" }}
                className="text-center py-3"
              >
                <h1
                  style={{
                    fontFamily: "rubik",
                    fontSize: "40px",
                    fontWeight: "700",
                  }}
                >
                  12
                </h1>
                <p
                  style={{
                    fontFamily: "rubik",
                    fontSize: "12px",
                    fontWeight: "700",
                  }}
                >
                  YEARS ESTABLISHED
                </p>
              </Col>
              <Col
                md={6}
                style={{ backgroundColor: "rgba(42, 42, 42, 1)" }}
                className="text-center text-light py-3"
              >
                <h1
                  style={{
                    fontFamily: "rubik",
                    fontSize: "40px",
                    fontWeight: "700",
                  }}
                >
                  250
                </h1>
                <p
                  style={{
                    fontFamily: "rubik",
                    fontSize: "12px",
                    fontWeight: "700",
                  }}
                >
                  COMPLETED PROJECTS
                </p>
              </Col>
            </Row>
            <Row>
                <Col
                  md={6}
                  style={{ backgroundColor: "rgba(247, 247, 247, 1)" }}
                  className="text-center py-3">
                  <h1 style={{fontFamily: "rubik",fontSize: "40px",fontWeight: "700",}}>24</h1>
                  <p style={{fontFamily: "rubik",fontSize: "12px",fontWeight: "700",}}>FIELD WORKERS</p>
                </Col>
                  <Col md={6}style={{ backgroundColor: "rgba(247, 247, 247, 1)" }}className="text-center py-3">
                  <h1 style={{fontFamily: "rubik",fontSize: "40px",fontWeight: "700"}}>18</h1>
                    <p style={{fontFamily: "rubik",fontSize: "12px",fontWeight: "700",}}>OFFICE STAFF </p>
                </Col>
              </Row>
          </Col>
        </Row>
        
      </Container>
    </div>
  );
};

export default OnlyTheBest;
