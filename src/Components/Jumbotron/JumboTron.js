import React from "react";
import { Jumbotron } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./JumboTron.css";

const JumboTron = () => {
  return (
    <Jumbotron fluid className="jumbo">
      <h1 className="jumbotronHeading bg-transparent">
        Hello! Welcome to the home of{" "}
        <strong className="name">Sam Rogers Developer!</strong>
        <br />
        <br />
        It's a pleasure to meet you.
      </h1>
    </Jumbotron>
  );
};

export default JumboTron;
