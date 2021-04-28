import React from "react";
import { Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Techstack = ({ iconName }) => {
  return (
    <>
      <Col className="icons">
        <i className={`${iconName} icon-images`}></i>
      </Col>
    </>
  );
};

export default Techstack;
