import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import WorkCard from "./WorkCard";
import JumboTron from "../../Jumbotron/JumboTron";
import "./Work.css";

// need to import some images
import burger from "../../../Assets/Projects/eat-da-burgers.png";
import employee from "../../../Assets/Projects/employeedirectory.png";
import recipe from "../../../Assets/Projects/recipeappexample.png";
import planner from "../../../Assets/Projects/Interactive-Entertainment-Planner.png";

const Work = () => {
  return (
    <>
      <JumboTron
        content={
          <h1 className="jumbotron-heading about-header">
            Recent Work by Sam Rogers
          </h1>
        }
      />
      <Container fluid className="work">
        <Row className="workRow">
          <Col lg={6} className="workCol">
            <WorkCard
              imgPath={recipe}
              title="Everyday Recipes App"
              description="Cooking can be an incredible experience but it can also be incredibly frustrating. Surfing through old cookbooks with stained hard to read recipe cards can be exhausting and take all the joy out of the kitchen. This was the issue posed to me by my partner, Kelsey. She wanted a way to store and access her favorite recipes in a one stop location. Enter Everyday Recipes, an easy to use recipe app that allows a user to add, store, edit, delete, the recipes they love. The app is designed, tried and tested by developers and users alike who are every day at home cooks."
              link="https://my-favorite-recipes-app-portla.herokuapp.com/"
            />
          </Col>
          <Col lg={6} className="workCol">
            <WorkCard
              imgPath={planner}
              title="Interactive Entertainment Planner"
              description="Let’s set the stage - it’s Friday evening. You’re topping off a LONG week of work. The weather is nasty. You’re completely fried. You just NEED. TO. RELAX. But you can’t muster up the effort to figure out how to unwind. WORRY NOT! Hop on over to the Interactive Entertainment Planner. With minimal effort, you’ll be able grab a movie recommendation based on a simple input, generate a random cocktail to make for yourself, and find recipes based on ingredients that you want to include."
              link="https://samrogers15.github.io/Interactive_Entertainment_Planner/"
            />
          </Col>
          <Col lg={6} className="workCol">
            <WorkCard
              imgPath={burger}
              title="Interactive Entertainment Planner"
              description="This application allows a user to enter the name of a burger that they like into an input field and create a list of burgers that are stored in a table using the MySQL database. The user enters a burger name and the burger is added to the database along with a boolean value for wether the burger has been devoured or not (true or false). Upon adding the burger, a button is generated next to the burger name that allows a user to select whether or not they want to 'devour' the burger. When the burger is devoured, the specific burger shifts lists to be reflected under the 'devoured' list and the database is updated to reflect the new boolean value for devoured."
              link="https://polar-waters-92959.herokuapp.com/"
            />
          </Col>
          <Col lg={6} className="workCol">
            <WorkCard
              imgPath={employee}
              title="MySQL Employee Tracker"
              description="This is a command line application that allows a user to manage information on employees within a company. The application connects to a database housed in MySQL that contains three tables with information on departments, roles, and employees within the company. This Content Management System allows a user to add, view, and modify information about employees of a company."
              link="https://drive.google.com/file/d/1_20AT6cerIgXbkMycODh86IQtiO5k_qQ/view"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Work;
