import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import githubLogo from "../assets/img/github-logo.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const isMobile = window.matchMedia("only screen and (max-width: 600px)").matches;

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      setTimeout(() => setExpanded(false), 500);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setExpanded(false);
    setActiveLink(value);
  };

  return (
    <Navbar
      expanded={expanded}
      onToggle={(isExpanded) => {
        setExpanded(isExpanded);
        setScrolled(false);
      }}
      expand="md"
      className={scrolled || expanded ? "scrolled" : ""}
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>
              Home
            </Nav.Link>
            <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("skills")}>
              Skills
            </Nav.Link>
            <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("projects")}>
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/mar-blay" rel="noreferrer" target="_blank">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://www.instagram.com/marblay_design/" rel="noreferrer" target="_blank">
                <img src={navIcon3} alt="" />
              </a>
              <a href="https://github.com/Nyxiia" rel="noreferrer" target="_blank">
                <img src={githubLogo} alt="" />
              </a>
            </div>
            <a className="connect-btn" href="#connect" style={{ color: "white", textDecoration: "none" }}>
              Let’s Connect
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
