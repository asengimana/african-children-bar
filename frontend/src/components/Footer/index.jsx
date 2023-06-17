import React from "react";
import { Col, Container, Row, Navbar } from "react-bootstrap";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillEnvironment,
  AiFillPhone,
  AiFillClockCircle,
} from "react-icons/ai";

export default function Footer() {
  return (
    <div>
      <section className="py-5 footer bg-dark" id="footer">
        <Container>
          <Row className="gy-4 align-items-center">
            <Col md="4">
              <Navbar.Brand href="/" className="text-uppercase text-light">
                <span className="brand-name bg-gradient p-1 rounded-3 bg-success">
                  <span className="text-warning">African</span>{" "}
                  <span className="text-danger">Children</span>
                </span>
              </Navbar.Brand>
            </Col>
            <Col md="4">
              <p className="location">
                <span className="location-icon">
                  <AiFillEnvironment />
                </span>
                1 Rue de la Barre
                <br />
                59800 Lille
              </p>
            </Col>
            <Col md="4">
              <p className="phone">
                <span className="phone-icon">
                  <AiFillPhone />
                </span>
                03 20 39 17 22
              </p>
            </Col>
            <Col md="4">
              <p className="horaires">
                <span className="horaires-icon">
                  <AiFillClockCircle />
                </span>
                Lundi : Fermé
                <br />
                Mardi-Mercredi : 17h00 - 01h00
                <br />
                Jeudi-Vendredi-Samedi : 17h00 - 02h00
                <br />
                Dimanche : 18h00 - 01h00
              </p>
            </Col>
            <Col className="col-md-4 text-md-center">
              <ul className="list-unstyled mb-0">
                <li>Copyright © 2023 African Children</li>
              </ul>
            </Col>
            <Col className="col-md-4 text-md-end social-links">
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
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
