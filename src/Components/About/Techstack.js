import React from "react";
import { Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Techstack = ({ iconName }) => {
  return (
    <>
      <Col xs={4} md={2} className="skillIcons">
        <i className={`${iconName} tech-icon-images`}></i>
      </Col>
    </>
  );
};

export default Techstack;
