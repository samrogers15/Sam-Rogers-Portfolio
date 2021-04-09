import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import samnlola from "../../../Assets/samnlola.png";
import HomeAlt from "./HomeAlt";
import TypeWriter from "./TypeWriter";
import "./Home.css";

const Home = () => {
  return (
    <section className="homePage">
      <Container fluid className="homeContent" id="homeContent">
        <Row className="homeRow">
          <Col md={7} className="homeTitle">
            <h1 className="heading">
              I'm a Full Stack software developer living in Portland, OR with a
              focus on building clean, organized, and functional sites through
              the use of various programming languages, my favorite being the
              React Javascript library. I'd love the opportunity to collaborate
              on a project or build something custom for you. Take a cruise
              around the site and check out some of my work!
              <TypeWriter />
            </h1>
            <div>
              <TypeWriter />
            </div>
          </Col>
          <Col md={5} className="homeLogo">
            <img src={samnlola} alt="samAndLola" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      <HomeAlt />
    </section>
  );
};

export default Home;
