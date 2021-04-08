import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const WorkCard = ({ imgPath, title, description, link }) => {
  return (
    <Card className="workCard">
      <Card.Img className="workCardImg" src={imgPath} alt="workImg" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" href={link} target="_blank">
          <i className="cil-external-link">&nbsp;</i> View Project
        </Button>
      </Card.Body>
    </Card>
  );
};

export default WorkCard;
