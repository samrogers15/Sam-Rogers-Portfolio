import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';

const NavBar = () => {
  const [expand, setExpandState] = useState(false);
  const [navColor, setNavColorState] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      setNavColorState(true);
    } else {
      setNavColorState(false);
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
      className={navColor ? "sticky" : "navbar"}
      id="navBarID"
    >
      <Container>
        <Navbar.Brand href="/">
          {" "}
          <span>Sam Rogers Web Developer</span>
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
              <Nav.Link as={Link} to="/" oncClick={() => setExpandState(false)}>
                <i className="fas fa-home"></i> Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/About"
                onClick={() => setExpandState(false)}
              >
                <i className="far fa-user"></i> About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/Work"
                onClick={() => setExpandState(false)}
              >
                <i className="fab fa-codepen"></i> Work
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
