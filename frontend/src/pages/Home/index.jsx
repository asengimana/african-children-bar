import React from "react";
import { Link } from "react-router-dom";
import { Alert, Col, Container, Image, Row } from "react-bootstrap";
import laCarteImage from "../../assets/la-carte-image.jpg";
import Loader from "../../components/Loader";
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Error from "../../components/Error";
export default function Home() {
  const url = "https://african-children.onrender.com/api/categories";
  const {
    data: categories,
    isLoading,
    isError,
  } = useQuery(["categories"], () => {
    return Axios.get(url).then((res) => res.data);
  });
  const removeAccents = (str) =>
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return (
    <div>
      <section className="my-5 py-1" id="home">
        <Container>
          <Row>
            <Col md="12">
              <Image
                src={laCarteImage}
                className="rounded mx-auto d-block"
                fluid
              />
            </Col>
          </Row>
          <Row>
            <Container>
              <h1 className="section-title">La Carte</h1>
            </Container>
          </Row>

          <Row className="gy-4 gy-md-0 mt-4">
            <Col>
              {isLoading ? (
                <Loader />
              ) : isError ? (
                <Error />
              ) : (
                <ul className="drink-categories">
                  {categories?.map((category) => (
                    <li key={category._id}>
                      <Link
                        to={`/drinks/${removeAccents(category.name)
                          .split(" ")
                          .join("-")
                          .toLowerCase()}/${category._id}`}
                        activeclassname=""
                      >
                        <Alert key={category._id} variant="success">
                          {category.name}
                        </Alert>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
