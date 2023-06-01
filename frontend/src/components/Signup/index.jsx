import React, { useState } from "react";
import Axios from "axios";
import { Col, Container, Row, Form, Button } from "react-bootstrap";

export default function Signup() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmitUser = async (e) => {
    e.preventDefault();
    try {
      await Axios.post(
        "https://african-children.onrender.com/api/auth/signup",
        user
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <section className="my-5 py-5" id="drinks">
        <Container>
          <h1 className="section-title">Créer un compte</h1>
          <Row>
            <Col md="6">
              <Form>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Mot de passe</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Mot de passe"
                    name="password"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button variant="primary" onClick={onSubmitUser}>
                  S'inscrire
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
