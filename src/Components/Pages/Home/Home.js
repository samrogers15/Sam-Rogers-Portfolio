import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import samnlola from "../../../Assets/samnlola.png";
import HomeAlt from "./HomeAlt";
import TypeWriter from "./TypeWriter";

const Home = () => {
  return (
    <section>
      <Container fluid className="homeContainer" id="home">
        <Container fluid className="homeContent" id="homeContent">
          <Row>
            <Col md={7} className="homeTitle">
              <h1 className="heading">
                Hello! Welcome to the home of{" "}
                <strong className="name">Sam Rogers Developer!</strong>
              </h1>
              <h1 className="heading">
                It's a pleasure to meet you.
              </h1>
              <div>
                  <TypeWriter />
              </div>
            </Col>
            <Col md={5} className="homeLogo">
              <img src={samnlola} alt='samAndLola' className='img-fluid' />
            </Col>
          </Row>
        </Container>
      </Container>
      <HomeAlt />
    </section>
  );
};

export default Home;
