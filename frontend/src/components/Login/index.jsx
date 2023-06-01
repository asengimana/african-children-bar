import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Login() {
  useEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("userId")) {
      navigate("/admin");
    }
  });
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmitUser = async (e) => {
    e.preventDefault();
    const url = "https://african-children.onrender.com/api/auth/login";
    try {
      const resp = await Axios.post(url, user);
      const token = resp.data;
      Axios.defaults.headers.common["Authorization"] = token;
      localStorage.setItem("userId", token.userId);
      localStorage.setItem("token", token.token);
      window.location.reload();
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <section className="my-5 py-5" id="drinks">
        <Container>
          <h1 className="section-title">Se connecter</h1>

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
                  Connexion
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
