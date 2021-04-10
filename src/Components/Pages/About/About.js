import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import JumboTron from "../../Jumbotron/JumboTron";
import InfoCard from "./InfoCard";
import Tilt from "react-parallax-tilt";
import sam1 from "../../../Assets/sam1.png";
import "./About.css";

const About = () => {
  return (
    <>
      <JumboTron
        content={
          <h1 className="jumbotron-heading about-header">A bit about me!</h1>
        }
      />
      <Container fluid className="about-me">
        <Row>
          <Col md={7}>
            <InfoCard />
          </Col>
          <Col md={5}>
            <Tilt>
              <img src={sam1} alt="samPic" className="img-fluid sam-pizza-pic" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
