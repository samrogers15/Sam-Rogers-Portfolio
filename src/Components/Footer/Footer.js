import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-left">
          <p>Site Developed by Sam Rogers | Copyright © {year} SRD</p>
        </Col>
        <Col md="4" className="footer-left">
          <p>
            Like this site? Take a{" "}
            <a
              href="https://github.com/samrogers15/Sam-Rogers-Portfolio"
              target="_blank"
              rel="noreferrer"
            >
              peek
            </a>{" "}
            under the hood to view the source code!
          </p>
        </Col>
        <Col md="4" className="footer-center">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/samuelerogers/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/samrogers15"
                target="_blank"
                rel="noreferrer"
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
