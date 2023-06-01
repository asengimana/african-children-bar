import React from "react";
import { Alert, Badge, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <section className="my-5 py-5" id="not-found">
        <Container>
          <h1 className="section-title">Erreur 404</h1>
          <Row className="gy-4 gy-md-0 mt-4 align-items-center">
            <Col md="6">
              <Alert variant="danger">
                Oups! La page que vous demandez n'existe pas ou n'est plus
                disponible.
              </Alert>
              <Link to="/">
                <Badge bg="success">Retourner à l'accueil</Badge>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
