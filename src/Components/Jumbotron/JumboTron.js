import React from "react";
import { Jumbotron } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./JumboTron.css";

const JumboTron = ({ content }) => {
  return (
    <div id="jumbotron-div">
      <Jumbotron fluid className="jumbo">
        {content}
      </Jumbotron>
    </div>
  );
};

export default JumboTron;
