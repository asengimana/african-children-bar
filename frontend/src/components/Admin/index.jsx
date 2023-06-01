import React, { useEffect } from "react";

import { Col, Container, Row, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Admin() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token") && !localStorage.getItem("userId")) {
      navigate("/");
    }
  });

  return (
    <div>
      <section className="my-5 py-5" id="drinks">
        <Container>
          <h1 className="section-title">Admin</h1>

          <Row>
            <Col>
              <Link to="/add">
                <Button variant="success">Ajouter une boisson</Button>
              </Link>
            </Col>
            <Col>
              <Link to="/drinks">
                <Button variant="success">Liste des boissons</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
