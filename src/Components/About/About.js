import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import InfoCard from "./InfoCard";
import Techstack from "./Techstack";
import Resume from "../../Assets/Resume/Resume.pdf";
import sam1 from "../../Assets/sam1.png";

const About = () => {
  return (
    <Container fluid className="aboutSam">
      <Row>
        <Col md={7}>
          <h1 id="aboutSamTitle">Get to know me!</h1>
          <InfoCard />
        </Col>
        <Col md={5}>
          <img src={sam1} alt="samPic" className="img-fluid" />
        </Col>
      </Row>
      <h1 className="resume">Professional Resume</h1>
      <Row>
        <Button variant="primary" href={Resume} target="_blank">
          <i className="fas fa-download">&nbsp;</i>Download CV
        </Button>
      </Row>
      <h1 className="skillsHeading">Professional Skills</h1>
      <Row>
        <Techstack iconName="devicon-javascript-plain" />
      </Row>
      <h1 className="projectsHeading">Recent Projects</h1>
      <Row>
        <Techstack iconName="devicon-javascript-plain" />
      </Row>
    </Container>
  );
};

export default About;
