import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Loader() {
  return (
    <div>
      <section>
        <Container>
          <Row className="justify-content-center">
            <Col xs="8" md="4">
              <Container>
                <h3 className="text-warning">Chargement...</h3>
                <div class="lds-facebook">
                  <div className="bg-success"></div>
                  <div className="bg-warning"></div>
                  <div className="bg-danger"></div>
                </div>
              </Container>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
