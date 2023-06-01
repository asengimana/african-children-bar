import React, { useState } from "react";
import Axios from "axios";
import {
  Col,
  Container,
  Row,
  Form,
  Button,
  Badge,
  Alert,
} from "react-bootstrap";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
export default function Add() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token") && !localStorage.getItem("userId")) {
      navigate("/");
    }
  });
  //Add new drink
  const [drink, setDrink] = useState({
    name: "",
    ingredients: "",
    category_id: "",
    price: "",
  });
  const [categories, setCategories] = useState([]);
  const categoriesURL = "https://african-children.onrender.com/api/categories";
  useEffect(() => {
    const getAllCategories = async () => {
      try {
        const resp = await Axios.get(categoriesURL);
        setCategories(resp.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllCategories();
  }, []);

  const handleChange = (e) => {
    setDrink({ ...drink, [e.target.name]: e.target.value });
    //console.log(drink);
  };
  const url = "https://african-children.onrender.com/api/drinks";
  const onSubmitDrink = async (e) => {
    e.preventDefault();
    try {
      await Axios.post(url, drink);
      setMessage("Boisson ajoutée avec succès !");
      document.getElementById("add-drink").reset();
    } catch (error) {
      console.log(error);
    }
    document.getElementById("add-drink").reset();
  };

  return (
    <div>
      <section className="my-5 py-5" id="drinks">
        <Container>
          <h1 className="section-title">Ajouter une boisson</h1>
          {message ? (
            <Row>
              <Col md="6" className="drink-add">
                <Alert key="success" variant="success">
                  {message}

                  <p>
                    <Link to="/drinks">
                      <Badge>Liste des boissons</Badge>
                    </Link>
                  </p>
                </Alert>
              </Col>
            </Row>
          ) : (
            ""
          )}
          <Row>
            <Col md="6">
              <Form id="add-drink">
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Nom</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nom de la boisson"
                    name="name"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ingredients">
                  <Form.Label>Ingrédients</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrédients"
                    name="ingredients"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="category_id">
                  <Form.Label>Catégorie</Form.Label>
                  <Form.Select name="category_id" onChange={handleChange}>
                    <option>Choisir une catégorie</option>
                    {categories.map((category) => (
                      <option key={category._id} value={category._id}>
                        {category.name}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="price">
                  <Form.Label>Prix</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Prix"
                    name="price"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button
                  variant="success"
                  onClick={onSubmitDrink}
                  className="add-drink-button"
                >
                  Ajouter
                </Button>
                <Link to="/drinks">
                  <Button className="categories-link" variant="danger">
                    <AiOutlineArrowLeft size={20} />
                  </Button>
                </Link>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
