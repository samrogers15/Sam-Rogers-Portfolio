import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const InfoCard = () => {
  return (
    <Card className="infoCard">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="introParagraph">
            Here is where I'll start to describe some things about myself!
          </p>
          <ul>
            <li className="about-activity">
              {/* PUT IN SOME ICONS FROM FA FOR THINGS YOU LIKE - SKIING< CLIMBING< ETC */}
              <i className="far fa-hand-point-right"></i> Something I Like
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Something I Like
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Something I Like
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default InfoCard;
