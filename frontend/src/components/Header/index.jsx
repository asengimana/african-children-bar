import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
export default function Header() {
  const token = localStorage.getItem("token");
  return (
    <div className="py-4">
      <Navbar className="header-navbar fixed-top" expand="lg" bg="dark">
        <Container>
          <Navbar.Brand href="/" className="text-uppercase text-light">
            <span className="brand-name bg-gradient p-1 rounded-3 bg-success">
              <span className="text-danger">African</span>{" "}
              <span className="text-warning">Children</span>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="main-navbar-links">
              <Nav.Link className="link-text text-light">
                <NavLink to="/" activeclassname="">
                  La Carte
                </NavLink>
              </Nav.Link>
              <Nav.Link className="link-text text-light" href="#footer">
                Contact
              </Nav.Link>
              {token ? (
                <Nav.Link className="link-text text-light">
                  <NavLink to="/admin" activeclassname="">
                    Admin
                  </NavLink>
                </Nav.Link>
              ) : (
                ""
              )}
              {token ? (
                <Nav.Link className="link-text text-light">
                  <NavLink to="/logout" activeclassname="">
                    Déconnexion
                  </NavLink>
                </Nav.Link>
              ) : (
                ""
              )}
            </Nav>
            <ul className="list-inline mb-0">
              <li className="list-inline-item social-links">
                <a
                  href="https://www.facebook.com/AfricanChildrenBar"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none"
                >
                  <AiFillFacebook size={30} />
                </a>
              </li>

              <li className="list-inline-item social-links">
                <a
                  href="https://www.instagram.com/africanchildren.bar/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none"
                >
                  <AiFillInstagram size={30} />
                </a>
              </li>
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
