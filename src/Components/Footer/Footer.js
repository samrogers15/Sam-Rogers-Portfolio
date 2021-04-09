import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Container fluid className="footer">
      <Row className="footerRow">
        <Col md="4" className="footer-left">
          <p className="footerText">Site Developed by Sam Rogers | Copyright © {year} SRD</p>
        </Col>
        <Col md="4" className="footer-center">
          <p className="footerText">
            Like this site? Take a{" "}
            <a
              href="https://github.com/samrogers15/Sam-Rogers-Portfolio"
              target="_blank"
              rel="noreferrer"
            >
              peek
            </a>{" "}
            at the source code!
          </p>
        </Col>
        <Col md="4" className="footer-right">
          <div className="footer-icons">
            <div className="social-icons">
              <a
                className="icons"
                href="https://www.linkedin.com/in/samuelerogers/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon className="footerIcons" icon={faLinkedin} />
              </a>
              <a
                className="icons"
                href="https://github.com/samrogers15"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className="footerIcons"
                  icon={faGithubSquare}
                />
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
