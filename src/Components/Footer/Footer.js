import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Container fluid className="footer">
      <Row className="footerRow">
        <Col xs={4} sm={4} md={4} lg={4} xl={4} className="footer-left">
          <p className="footerText">Site Developed by Sam Rogers | © {year} SRD</p>
        </Col>
        <Col xs={4} sm={4} md={4} lg={4} xl={4} className="footer-center">
          <p className="footerText">
            Have a {" "}
            <a
              href="https://github.com/samrogers15/Sam-Rogers-Portfolio"
              target="_blank"
              rel="noreferrer"
            >
              look
            </a>{" "}
            at the source code!
            <br></br>
            Or email me at{" "}
            <a
              href="mailto:samrogers15@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              samrogers15@gmail.com
            </a>{""}.
          </p>
        </Col>
        <Col xs={4} sm={4} md={4} lg={4} xl={4} className="footer-right">
          <div className="footer-icons">
            <div className="social-icons">
              <a
                className="footer-icon-images"
                href="https://www.linkedin.com/in/samuelerogers/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon className="footerIcons" icon={faLinkedin} />
              </a>
              <a
                className="footer-icon-images"
                href="https://github.com/samrogers15"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className="footerIcons"
                  icon={faGithubSquare}
                />
              </a>
              <a
                className="footer-icon-images"
                href="mailto:samrogers15@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className="footerIcons"
                  icon={faEnvelopeOpenText}
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
