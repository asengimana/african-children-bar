import React from "react";
import { Link } from "react-router-dom";
import { Alert, Col, Container, Image, Row } from "react-bootstrap";
import laCarteImage from "../../assets/la-carte-image.jpg";

import Axios from "axios";
import { useQuery } from "@tanstack/react-query";
export default function Home() {
  const url = "https://african-children.onrender.com/api/categories";
  const { data: categories, isLoading } = useQuery(["categories"], () => {
    return Axios.get(url).then((res) => res.data);
  });
  return (
    <div>
      <section className="my-5 py-1" id="home">
        <Container>
          <Row>
            <Col>
              <Image src={laCarteImage} fluid />
            </Col>
          </Row>
          <h1 className="section-title">La Carte</h1>
          <Row className="gy-4 gy-md-0 mt-4">
            {isLoading ? (
              <Container>
                <Row className="gy-4 gy-md-0 mt-4">
                  <Col sm="6" md="12" className="">
                    <h1>Chargement en cours...</h1>
                  </Col>
                </Row>
              </Container>
            ) : (
              <ul className="drink-categories">
                {categories?.map((category) => (
                  <li key={category._id}>
                    <Link to={`/drinks/${category._id}`} activeclassname="">
                      <Alert key={category._id} variant="success">
                        {category.name}
                      </Alert>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </Row>
        </Container>
      </section>
    </div>
  );
}
