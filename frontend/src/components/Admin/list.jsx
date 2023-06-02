import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Badge, Button, Col, Container, Row } from "react-bootstrap";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useEffect } from "react";

import Axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Loader";
import Error from "../Error";
export default function List() {
  const url = "https://african-children.onrender.com/api/drinks";
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token") && !localStorage.getItem("userId")) {
      navigate("/");
    }
  });
  const {
    data: drinks,
    isLoading,
    isError,
  } = useQuery(["categories"], () => {
    return Axios.get(url).then((res) => res.data);
  });

  return (
    <div>
      <section className="my-5 py-5" id="drinks-list">
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <Error />
        ) : (
          <Container>
            <h1 className="section-title">
              Liste des boissons ({drinks?.length})
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
              {drinks?.map((drink) => (
                <Col sm="6" md="4" key={drink._id}>
                  <Alert key={drink._id} variant="success">
                    <p>{drink.name}</p>
                    <div className="drink-links">
                      <Link to={`/update/${drink._id}`}>
                        <Badge bg="warning">Modifier</Badge>
                      </Link>
                      <Link to={`/delete/${drink._id}`}>
                        <Badge bg="danger">Supprimer</Badge>
                      </Link>
                    </div>
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
        )}
      </section>
    </div>
  );
}
