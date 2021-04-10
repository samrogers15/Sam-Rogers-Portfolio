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
  faPizzaSlice
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
          <span className="activity">Alpine and backcountry skiing</span>{" "}
          <FontAwesomeIcon className="activity-icon" icon={faSkiing} />
        </li>
        <li className="about-activity">
          <span className="activity">Rock climbing</span>{" "}
          <FontAwesomeIcon className="activity-icon" icon={faMountain} />
        </li>
        <li className="about-activity">
          <span className="activity">Biking</span>{" "}
          <FontAwesomeIcon className="activity-icon" icon={faBiking} />
        </li>
        <li className="about-activity">
          <span className="activity">Camping</span>{" "}
          <FontAwesomeIcon className="activity-icon" icon={faCampground} />
        </li>
        <li className="about-activity">
          <span className="activity">Hiking</span>{" "}
          <FontAwesomeIcon className="activity-icon" icon={faHiking} />
        </li>
        <li className="about-activity">
          <span className="activity">Eating pizza!</span>{" "}
          <FontAwesomeIcon className="activity-icon" icon={faPizzaSlice} />
        </li>
      </ul>
    </Card>
  );
};

export default InfoCard;
