import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Badge, Button, Col, Container, Row } from "react-bootstrap";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";

export default function List() {
  const [drinks, setDrinks] = useState([]);
  const url = "https://african-children.onrender.com/api/drinks";
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token") && !localStorage.getItem("userId")) {
      navigate("/");
    }
  });
  useEffect(() => {
    const getAllCategories = async () => {
      try {
        const resp = await Axios.get(url);
        setDrinks(resp.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllCategories();
  }, []);

  return (
    <div>
      <section className="my-5 py-5" id="drinks-list">
        <Container>
          <h1 className="section-title">
            Liste des boissons ({drinks.length})
          </h1>
          <Row className="gy-4 gy-md-0 mt-4 align-items-center">
            <Container>
              <Col sm="6" md="4" className="page-link">
                <Link to="/add">
                  <Button variant="success">Ajouter une boisson</Button>
                </Link>
                <Link to="/admin">
                  <Button className="categories-link" variant="danger">
                    <AiOutlineArrowLeft size={20} />
                  </Button>
                </Link>
              </Col>
            </Container>
          </Row>
          <Row className="gy-4 gy-md-0 mt-4 align-items-center">
            {drinks.map((drink) => (
              <Col sm="6" md="4" key={drink._id}>
                <Alert key={drink._id} variant="success">
                  {drink.name}
                  <p className="drink-links">
                    <Link to={`/update/${drink._id}`}>
                      <Badge bg="warning">Modifier</Badge>
                    </Link>
                    <Link to={`/delete/${drink._id}`}>
                      <Badge bg="danger">Suprimer</Badge>
                    </Link>
                  </p>
                </Alert>
              </Col>
            ))}
          </Row>
          <Row className="gy-4 gy-md-0 mt-4 align-items-center">
            <Container>
              <Col sm="6" md="4" className="page-link">
                <Link to="/add">
                  <Button variant="success">Ajouter une boisson</Button>
                </Link>
                <Link to="/admin">
                  <Button className="categories-link" variant="danger">
                    <AiOutlineArrowLeft size={20} />
                  </Button>
                </Link>
              </Col>
            </Container>
          </Row>
        </Container>
      </section>
    </div>
  );
}
