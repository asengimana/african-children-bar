import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Col, Container, Row, Accordion, Badge, Image } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function Drinks() {
  const [drinks, setDrinks] = useState([]);
  const [categoryName, setCategoryName] = useState([]);
  const [categoryImage, setCategoryImage] = useState("");
  const { categoryId } = useParams();
  const url = `https://african-children.onrender.com/api/categories/${categoryId}`;

  useEffect(() => {
    const getDrinks = async () => {
      try {
        const resp = await Axios.get(url);
        setDrinks(resp.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDrinks();
  }, [url]);

  const categoriesURL = "https://african-children.onrender.com/api/categories";
  useEffect(() => {
    const getAllCategories = async () => {
      try {
        const resp = await Axios.get(categoriesURL);
        setCategoryName(resp.data);
        for (let i = 0; i < resp.data.length; i++) {
          if (resp.data[i]._id === categoryId) {
            setCategoryName(resp.data[i].name);
            setCategoryImage(resp.data[i].categoryImage);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllCategories();
  }, [categoryId]);
  return (
    <div>
      <section className="my-5 py-1" id="drinks">
        <Container>
          <Row>
            <Container>
              <Col md="12">
                <Image src={`/images/${categoryImage}`} fluid />
              </Col>
            </Container>
          </Row>
          <h1 className="section-title">{categoryName}</h1>
          <Link to="/">
            <Badge className="categories-link" bg="success">
              <AiOutlineArrowLeft size={20} />
            </Badge>
          </Link>
          <Row>
            {drinks.map((drink) => (
              <Col md="12" className="text-dark" key={drink._id}>
                <Accordion key={drink._id} flush>
                  <Accordion.Item eventKey={drink._id} key={drink._id}>
                    <Accordion.Header>
                      <span className="drink-name">{drink.name}</span>

                      <Badge className="drink-price" bg="secondary">
                        {drink.price}€
                      </Badge>
                    </Accordion.Header>
                    <Accordion.Body>
                      {drink.ingredients === ""
                        ? drink.name
                        : drink.ingredients}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            ))}
            <Link to="/">
              <Badge className="categories-link" bg="success">
                <AiOutlineArrowLeft size={20} />
              </Badge>
            </Link>
          </Row>
        </Container>
      </section>
    </div>
  );
}
