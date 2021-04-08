import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import WorkCard from "./WorkCard";

// need to import some images
import samnlola from "../../Assets/samnlola.png";

const Work = () => {
  return (
    <Container fluid className="work">
      <h1 className="workHeader">Recent Work by Sam Rogers</h1>
      <Row>
        <Col md={4} className="workCol">
          <WorkCard
            imgPath={samnlola}
            title="ShowMyShow"
            description="This is a command line application that allows a user to input specific information about a team of employees. When the code is initialized, the user is prompted to select whether they want to add a manager, an engineer, or an intern and is asked specific questions about the employee type they have requested to add. After the questions are answered, the user is prompted to select whether they want to add another employee or to finish the program. When the program is finished, an HTML file that houses the team's org chart is generated."
            link="https://drive.google.com/file/d/1F6JggdE7yGNvNqi9yV6oVVqkQMDo2ufv/view"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Work;
