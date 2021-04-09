import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSkiing,
  faMountain,
  faBiking,
  faCampground,
  faHiking,
} from "@fortawesome/free-solid-svg-icons";

const InfoCard = () => {
  return (
    <Card className="infoCard">
      <h3 className="introParagraph">
        Outside of web development, I enjoy spending time with my partner Lara
        and our silver lab Lola. The three of us spend a lot of time outdoors,
        doing a variety of activities.
      </h3>
      <ul>
        <li className="about-activity">
          <span>Alpine and backcountry skiing</span>{" "}
          <FontAwesomeIcon icon={faSkiing} />
        </li>
        <li className="about-activity">
          <span>Rock climbing</span> <FontAwesomeIcon icon={faMountain} />
        </li>
        <li className="about-activity">
          <span>Biking</span> <FontAwesomeIcon icon={faBiking} />
        </li>
        <li className="about-activity">
          <span>Camping</span> <FontAwesomeIcon icon={faCampground} />
        </li>
        <li className="about-activity">
          <span>Hiking</span> <FontAwesomeIcon icon={faHiking} />
        </li>
      </ul>
    </Card>
  );
};

export default InfoCard;
