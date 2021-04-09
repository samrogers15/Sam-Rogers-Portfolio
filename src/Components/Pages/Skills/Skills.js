import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import JumboTron from "../../Jumbotron/JumboTron";
import Techstack from "./Techstack";
import Resume from "../../../Assets/Resume/Resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import "./Skills.css";

const Skills = () => {
  return (
    <>
      <JumboTron
        content={
          <h1 className="jumbotron-heading about-header">
            How I Get The Job Done
          </h1>
        }
      />

      <Container fluid className="skill-set">
        <h1 className="icon-header">Technical Skill Set</h1>
        <Row className="skill-icons-row">
          <Techstack iconName="devicon-react-original-wordmark" />
          <Techstack iconName="devicon-javascript-plain" />
          <Techstack iconName="devicon-nodejs-plain-wordmark" />
          <Techstack iconName="devicon-npm-original-wordmark" />
          <Techstack iconName="devicon-yarn-plain" />
          <Techstack iconName="devicon-html5-plain-wordmark" />
          <Techstack iconName="devicon-css3-plain-wordmark" />
          <Techstack iconName="devicon-jquery-plain-wordmark" />
          <Techstack iconName="devicon-bootstrap-plain-wordmark" />
          <Techstack iconName="devicon-mongodb-plain-wordmark" />
          <Techstack iconName="devicon-mysql-plain-wordmark" />
          <Techstack iconName="devicon-sequelize-plain" />
          <Techstack iconName="devicon-express-original-wordmark" />
          <Techstack iconName="devicon-handlebars-plain-wordmark" />
        </Row>
      </Container>
      <Container fluid className="tool-set">
        <h1 className="icon-header">Tools in the Shed</h1>
        <Row className="tool-icons-row">
          <Techstack iconName="devicon-visualstudio-plain" />
          <Techstack iconName="devicon-git-plain" />
          <Techstack iconName="devicon-github-original-wordmark" />
          <Techstack iconName="devicon-gitlab-plain-wordmark" />
          <Techstack iconName="devicon-amazonwebservices-plain-wordmark" />
          <Techstack iconName="devicon-heroku-plain-wordmark" />
          <Techstack iconName="devicon-apple-original" />
          <Techstack iconName="devicon-bash-plain" />
          <Techstack iconName="devicon-chrome-plain-wordmark" />
          <Techstack iconName="devicon-codepen-plain" />
          <Techstack iconName="devicon-google-plain" />
        </Row>
      </Container>
      <Container fluid className="resumeButton">
        <h1 className="resumeHeader">
          Interested in learning more? Download my resume!
        </h1>
        <Row>
          <Col className="resume-button-col">
            <Button variant="primary" href={Resume} target="_blank">
              <FontAwesomeIcon icon={faDownload} />
              <i>&nbsp;</i>Download Resume
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Skills;
