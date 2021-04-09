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
          <h1 className="jumbotron-heading">
            Hello and welcome to the home of{" "}
            <strong className="name">Sam Rogers!</strong>
            <br />
            <br />
            <TypeWriter />
          </h1>
        }
      />
      <section className="homePage">
        <Container fluid className="homeContent" id="homeContent">
          <Row className="homeRow">
            <Col md={7} className="homeTitle">
              <h2 className="heading">
                Full stack software developer living in Portland, OR.
                <br />
                <br />
                <br />
                Focused on building clean, organized, and functional sites
                through the use of various programming languages.
                <br />
                <br />
                <br />
                Take a cruise around the site!
              </h2>
            </Col>
            <Col md={5} className="homeLogo">
              <img src={samnlola} alt="samAndLola" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
