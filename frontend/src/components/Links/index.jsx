import React from "react";
import { Link } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

import { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";

export default function Links() {
  const [categories, setCategories] = useState([]);
  const url = "https://african-children.onrender.com/api/categories";
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
          <h1 className="section-title">Accueil</h1>
          <Row className="gy-4 gy-md-0 mt-4 align-items-center">
            <ul>
              {categories.map((category) => (
                <li key={category._id}>
                  <Link to={`/drinks/${category._id}`} activeclassname="">
                    {category.name}
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
