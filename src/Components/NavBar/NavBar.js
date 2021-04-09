import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPortrait,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";

const NavBar = () => {
  const [expand, setExpandState] = useState(false);
  const [navBarColor, setNavBarColorState] = useState(false);
  const [navTextColor, setNavTextColorState] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      setNavBarColorState(true);
      setNavTextColorState(true);
    } else {
      setNavBarColorState(false);
      setNavTextColorState(false);
    }
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="md"
      expanded={expand}
      fixed="top"
      className={navBarColor ? "sticky" : "navbar"}
      id="navBarID"
    >
      <Container>
        <Navbar.Brand href="/">
          {" "}
          <span className={navTextColor ? "stickyText" : "navbarText"}>Sam Rogers Web Developer</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            setExpandState(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => setExpandState(false)}
              >
                <FontAwesomeIcon className={navTextColor ? "stickyText" : "navbarText"} icon={faHome} />
                <span className={navTextColor ? "stickyText" : "navbarText"} id="navigationText">Home</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/About"
                onClick={() => setExpandState(false)}
              >
                <FontAwesomeIcon className={navTextColor ? "stickyText" : "navbarText"} icon={faPortrait} />
                <span className={navTextColor ? "stickyText" : "navbarText"} id="navigationText">About</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/Work"
                onClick={() => setExpandState(false)}
              >
                <FontAwesomeIcon className={navTextColor ? "stickyText" : "navbarText"} icon={faLaptop} />
                <span className={navTextColor ? "stickyText" : "navbarText"} id="navigationText">Work</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
