import React from "react";
import { Link } from "react-router-dom";
import { Alert, Col, Container, Image, Row } from "react-bootstrap";
import laCarteImage from "../../assets/la-carte-image.jpg";
import { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const url = "http://localhost:8800/api/categories";
  useEffect(() => {
    const getAllCategories = async () => {
      try {
        const resp = await Axios.get(url);
        setCategories(resp.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllCategories();
  }, []);

  return (
    <div>
      <section className="my-5 py-5" id="home">
        <Container>
          <Row>
            <Col>
              <Image src={laCarteImage} fluid />
            </Col>
          </Row>
          <h1 className="section-title">La Carte</h1>
          <Row className="gy-4 gy-md-0 mt-4">
            <ul className="drink-categories">
              {categories.map((category) => (
                <li key={category._id}>
                  <Link to={`/drinks/${category._id}`} activeclassname="">
                    <Alert key={category._id} variant="success">
                      {category.name}
                    </Alert>
                  </Link>
                </li>
              ))}
            </ul>
          </Row>
        </Container>
      </section>
    </div>
  );
}
