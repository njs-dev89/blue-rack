import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import { navigate } from "gatsby";
import "./MainNavbar.css";

export default function MainNavbar() {
  return (
    <Navbar bg="light" expand="lg" sticky="top" id="navbar">
      <Container>
        <div onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          <StaticImage src="../../images/logo/logo.png" className="logo" />
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          {" "}
          <FaBars />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav" style={{ flexGrow: 0 }}>
          <Nav className="me-auto ms-auto me-0">
            <Nav.Item>
              <Nav.Link className="px-4" as={Link} to="/">
                Home
              </Nav.Link>
            </Nav.Item>
            <NavDropdown
              className="dropdown pe-4"
              title="Hosting"
              as="li"
              title="Hosting"
            >
              <NavDropdown.Item as={Link} to="/sharedhosting">
                Shared Hosting
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/resellerhosting">
                Reseller Hosting
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/vps">
                VPS
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Item>
              <Nav.Link as={Link} to="/tos" className="pe-4">
                Terms and Conditions
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/about" className="pe-4">
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/contact" className="pe-4">
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav.Item>
            <a
              href="https://serverpeek.com/client/register.php"
              className="navbar-btn btn-shadow me-3"
            >
              Sign up
            </a>
          </Nav.Item>
          <Nav.Item>
            <a
              href="https://serverpeek.com/client/index.php/login"
              className="navbar-btn__green btn-shadow"
            >
              Client Area
            </a>
          </Nav.Item>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
