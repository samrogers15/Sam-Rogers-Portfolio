import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import JumboTron from "../../Jumbotron/JumboTron";
import samnlola from "../../../Assets/samnlola.png";
import TypeWriter from "./TypeWriter";
import "./Home.css";

const Home = () => {
  return (
    <>
      <JumboTron
        content={
          <p className="jumbotron-heading">
            Hello and welcome to the home of{" "}
            <strong className="name">Sam Rogers!</strong>
            <br />
            <br />
            <TypeWriter />
          </p>
        }
      />
      <Container fluid>
        <Row className="homeRow">
          <Col xs={12} sm={12} md={12} lg={12} xl={12} className="homeTitle">
            <p className="heading">
              Full stack software developer living in Portland, OR.
              <br />
              <br />
              <br />
              Focused on building clean, organized, and functional sites through
              the use of various programming languages.
              <br />
              <br />
              <br />
              Take a cruise around the site!
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} className="homeLogo">
            <img src={samnlola} alt="samnlola" className="img-fluid samnlola" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
