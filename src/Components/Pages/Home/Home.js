import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import JumboTron from "../../Jumbotron/JumboTron";
import samnlola from "../../../Assets/samnlola.png";
import HomeAlt from "./HomeAlt";
import TypeWriter from "./TypeWriter";
import "./Home.css";

const Home = () => {
  return (
    <>
      <JumboTron />
      <section className="homePage">
        <Container fluid className="homeContent" id="homeContent">
          <Row className="homeRow">
            <Col md={7} className="homeTitle">
              <h2 className="heading">
                Full stack software developer living in Portland, OR.
                <br />              
                <br />
                <br />
                Focused on building clean, organized, and functional sites through
                the use of various programming languages (details here).
                {/* Add hyperlink to the details area */}
                <br />              
                <br />
                <br />
                Take a cruise around the site!
                <TypeWriter />
              </h2>
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
    </>
  );
};

export default Home;
