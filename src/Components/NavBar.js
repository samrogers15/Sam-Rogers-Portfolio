import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../Assets/logo.png";

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
      bg="light"
      expand="md"
      expended={expand}
      fixed="top"
      className={navColor ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/">
          {" "}
          <img src={logo} className="img-fluid logo" alt="srLogo" />
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
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/Resume"
                onClick={() => setExpandState(false)}
              >
                <i className="far fa-file-alt"></i> Resume
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/Contact"
                onClick={() => setExpandState(false)}
              >
                <i className="far fa-envelope-open-text"></i> Contact
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="fork-btn">
              <Button href='https://github.com/samrogers15/Sam-Rogers-Portfolio' target='_blank' className='fork-btn-inner'>
                  <i className='fas fa-code-branch'></i>{" "}
                  <i className='far fa-start'></i>
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
