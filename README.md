![GitHub Last Commit](https://img.shields.io/github/last-commit/samrogers15/Sam-Rogers-Portfolio?style=plastic)
![GitHub Repo Size](https://img.shields.io/github/repo-size/samrogers15/Sam-Rogers-Portfolio?style=plastic)
![GitHub Followers](https://img.shields.io/github/followers/samrogers15?style=social)
![GitHub](https://img.shields.io/github/languages/top/samrogers15/Sam-Rogers-Portfolio?style=plastic)


# Sam Rogers Portfolio
> This is a repository for my developer portfolio. It was built using React and was deployed to a custom domain name. My portfolio houses general information about myself, links to my professional materials (including my resume, LinkedIn profile, and Github profile), as well as links to recent projects I've worked on. It will be continually updated as I progress in my career.
 
## Table of contents
* [General Info](#general-info)
* [Technologies](#technologies)
* [Live Link](#Live-Link)
* [Screen Shot](#Screen-Shot)
* [Code Snippets](#code-snippets)
* [Sources](#sources)
* [Contact](#contact)

## General Info
The portfolio was built with React and styled utilizing Bootstrap. Also included are a few NPM packages that helped enhance the overall style of the portfolio, including React Parallax Tilt, React Typewriter Effect, and Devicons.

## Technologies
* Javascript
* HTML/CSS
* Node
* React
* Bootstrap
* React Router DOM

## Live Link
[Sam Rogers Portfolio](https://www.samrogersdev.com)

## Screen Shot
![Sam Rogers Portfolio Screen Shot](./src/Assets/profileScreenshot.png)

## Code Snippets

The below example code shows the footer component:
```js
<Container fluid className="footer">
      <Row className="footerRow">
        <Col md="4" className="footer-left">
          <p className="footerText">Site Developed by Sam Rogers | Copyright © {year} SRD</p>
        </Col>
        <Col md="4" className="footer-center">
          <p className="footerText">
            Like this site? Take a{" "}
            <a
              href="https://github.com/samrogers15/Sam-Rogers-Portfolio"
              target="_blank"
              rel="noreferrer"
            >
              peek
            </a>{" "}
            at the source code!
          </p>
        </Col>
        <Col md="4" className="footer-right">
          <div className="footer-icons">
            <div className="social-icons">
              <a
                className="footer-icon-images"
                href="https://www.linkedin.com/in/samuelerogers/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon className="footerIcons" icon={faLinkedin} />
              </a>
              <a
                className="footer-icon-images"
                href="https://github.com/samrogers15"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className="footerIcons"
                  icon={faGithubSquare}
                />
              </a>
              <a
                className="footer-icon-images"
                href="mailto:samrogers15@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className="footerIcons"
                  icon={faEnvelopeOpenText}
                />
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
```

The below example code shows the Navbar component with scroll functionality:
```js
const NavBar = () => {
  const [expand, setExpandState] = useState(false);
  const [navBarColor, setNavBarColorState] = useState(false);
  const [navTextColor, setNavTextColorState] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY >= 45) {
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
      className={navBarColor ? "stickyBackground" : "navbarBackground"}
      id="navBarID"
    >
      <Container>
        <Navbar.Brand>
          {" "}
          <span className={navTextColor ? "stickyText" : "navbarText"} id="pageHeader">
            Sam Rogers Web Developer
          </span>
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
              <Nav.Link as={Link} to="/" onClick={() => setExpandState(false)}>
                <FontAwesomeIcon
                  className={navTextColor ? "stickyText" : "navbarText"}
                  icon={faHome}
                />
                <span
                  className={navTextColor ? "stickyText" : "navbarText"}
                  id="navigationText"
                >
                  Home
                </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/Skills"
                onClick={() => setExpandState(false)}
              >
                <FontAwesomeIcon
                  className={navTextColor ? "stickyText" : "navbarText"}
                  icon={faLaptop}
                />
                <span
                  className={navTextColor ? "stickyText" : "navbarText"}
                  id="navigationText"
                >
                  Skills
                </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/Work"
                onClick={() => setExpandState(false)}
              >
                <FontAwesomeIcon
                  className={navTextColor ? "stickyText" : "navbarText"}
                  icon={faBriefcase}
                />
                <span
                  className={navTextColor ? "stickyText" : "navbarText"}
                  id="navigationText"
                >
                  Work
                </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/About"
                onClick={() => setExpandState(false)}
              >
                <FontAwesomeIcon
                  className={navTextColor ? "stickyText" : "navbarText"}
                  icon={faPortrait}
                />
                <span
                  className={navTextColor ? "stickyText" : "navbarText"}
                  id="navigationText"
                >
                  About
                </span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
```

## Sources
Application enabled using the following sources:

* [React](https://reactjs.org/)
* [React Router DOM](https://www.npmjs.com/package/react-router-dom)
* [NPM React Parallax Tilt](https://www.npmjs.com/package/react-parallax-tilt)
* [NPM Typewriter Effect](https://www.npmjs.com/package/typewriter-effect)
* [Devicon](https://devicon.dev/)

## Contact
Created by Sam Rogers - feel free to contact me to collaborate on this project or any other project!

![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)

[samuelerogers](https://www.linkedin.com/in/samuelerogers/)



[Sam Rogers Dev](https://samrogers15.github.io/Current_Portfolio/index.html)


![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

[samrogers15](https://github.com/samrogers15)


https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
