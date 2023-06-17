import React from "react";
import { Col, Container, Row } from "react-bootstrap";
export default function Error() {
  return (
    <div>
      <Container>
        <Row className="gy-1 gy-md-0 mt-1">
          <Col sm="6" md="12" className="">
            <Container>
              <h1 className="section-title-error text-danger">
                Oups! Une erreur est survenue, veuillez réessayer
                ultérieurement.{" "}
              </h1>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
