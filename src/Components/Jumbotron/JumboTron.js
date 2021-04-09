import React from "react";
import { Jumbotron } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./JumboTron.css";

const JumboTron = ({ content }) => {
  return (
    <Jumbotron fluid className="jumbo">
      {content}
    </Jumbotron>
  );
};

export default JumboTron;
