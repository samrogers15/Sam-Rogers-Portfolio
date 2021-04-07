import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-left">
          <h3>Site Developed by Sam Rogers</h3>
        </Col>
        <Col md="4" className="footer-left">
          <h3>Copyright © {year} SRD</h3>
        </Col>
        <Col md="4" className="footer-center">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/samuelerogers/"
                style={{ color: "white" }}
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/samrogers15"
                style={{ color: "white" }}
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
