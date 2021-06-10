import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const WorkCard = ({ imgPath, title, description, skills, link, github }) => {
  return (
    <Card className="workCard">
      <Card.Img className="workCardImg" src={imgPath} alt="workImg" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{skills}</Card.Text>
        <Button variant="primary" href={link} target="_blank" id="link">
          <i className="cil-external-link">&nbsp;</i>View Project
        </Button>
        <Button variant="primary" href={github} target="_blank">
          <i className="cil-external-link">&nbsp;</i>View GitHub Repo
        </Button>
      </Card.Body>
    </Card>
  );
};

export default WorkCard;
