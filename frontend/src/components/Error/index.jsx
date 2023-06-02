import React from "react";
import { Col, Container, Row } from "react-bootstrap";
export default function Error() {
  return (
    <div>
      <Container>
        <Row className="gy-4 gy-md-0 mt-4">
          <Col sm="6" md="12" className="">
            <h1>Une erreur est survenue, veuillez réessayer ultérieurement </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
