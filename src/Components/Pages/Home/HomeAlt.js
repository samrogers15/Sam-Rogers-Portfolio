import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import sam1 from '../../../Assets/sam1.png';
import Tilt from "react-parallax-tilt";

const HomeAlt = () => {
  return (
    <Container fluid className="homeAbout" id="about">
      <Container>
        <Row>
          <Col md={8} className="homeAboutIntro">
            <h1 className="about">A little bit about me:</h1>
            <p className="aboutParagraph">
              Here is some sample text that I need to update once everything is
              functional
            </p>
            <br />
            <br />
            <p className="aboutParagraph">
              Here is another sample text that I need to update once everything
              is functional
            </p>
            <br />
            <br />
            <p className="aboutParagraph">
              Here is even another sample text that I need to update once
              everything is functional
            </p>
            <br />
            <br />
            <p className="aboutParagraph">
              Here is the final sample text that I need to update once
              everything is functional
            </p>
          </Col>
          <Col md={4} className="tiltLogo">
            <Tilt>
                <img src={sam1} className='img-fluid' alt='samPicNum1'/>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="homeAboutSocial">
            <h1 className="profiles">
              Want to get in touch? You can find me here:
            </h1>
            <ul className="socialLinks">
              <li className="socialIcons">
                <a
                  href="https://www.linkedin.com/in/samuelerogers/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color homeSocialIcons"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="socialIcons">
                <a
                  href="https://github.com/samrogers15"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color homeSocialIcons"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default HomeAlt;
