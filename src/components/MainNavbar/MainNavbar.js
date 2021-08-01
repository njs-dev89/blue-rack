import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import "./MainNavbar.css";

export default function MainNavbar() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        {/* <Navbar.Brand href="#home"> */}
        <StaticImage src="../../images/logo/logo.png" className="logo" />
        {/* </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          {" "}
          <FaBars />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav" style={{ flexGrow: 0 }}>
          <Nav className="me-auto ms-auto me-0">
            <Nav.Item>
              <Nav.Link href="#" className="px-4" as={Link} to="/">
                Home
              </Nav.Link>
            </Nav.Item>
            <NavDropdown
              className="dropdown pe-4"
              title="Hosting"
              as="li"
              title="Hosting"
            >
              <NavDropdown.Item as={Link} to="/sharedHosting">
                Shared Hosting
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/resellerHosting">
                Reseller Hosting
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/vps">
                VPS
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Item>
              <Nav.Link href="/" className="pe-4">
                Terms and Conditions
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/" className="pe-4">
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/" className="pe-4">
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav.Item>
            <button href="/" className="btn btn-blue btn-shadow me-3">
              Sign up
            </button>
          </Nav.Item>
          <Nav.Item>
            <button href="/" className="btn btn-green btn-shadow">
              Client Area
            </button>
          </Nav.Item>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
