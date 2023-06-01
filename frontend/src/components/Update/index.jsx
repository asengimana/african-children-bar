import React, { useEffect, useState } from "react";
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
import { Link, useParams, useNavigate } from "react-router-dom";

export default function Update() {
  //Update a drink
  const [drink, setDrink] = useState({});
  const [message, setMessage] = useState("");
  const { id } = useParams();
  const url = `https://african-children.onrender.com/api/drinks/${id}`;
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token") && !localStorage.getItem("userId")) {
      navigate("/");
    }
  });
  useEffect(() => {
    const getDrink = async () => {
      try {
        const resp = await Axios.get(url);
        setDrink(resp.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDrink();
  }, [url]);
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
  const updateDrink = async (e) => {
    e.preventDefault();

    try {
      await Axios.put(url, drink);
      setMessage("Article modifié avec succès !");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <section className="my-5 py-5" id="drinks">
        <Container>
          <h1 className="section-title">Modifier la boisson : {drink.name}</h1>
          {message ? (
            <Row>
              <Col md="6" className="drink-update">
                <Alert key="success" variant="success">
                  {message}
                  <p>
                    <Link to="/drinks">
                      <Badge>Retourner à la liste des boissons</Badge>
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
              <Form>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Nom</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nom de la boisson"
                    value={drink.name}
                    onChange={(e) =>
                      setDrink({ ...drink, name: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ingredients">
                  <Form.Label>Ingrédients</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrédients"
                    value={drink.ingredients}
                    onChange={(e) =>
                      setDrink({ ...drink, ingredients: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="category">
                  <Form.Label>Catégorie</Form.Label>
                  <Form.Select
                    onChange={(e) =>
                      setDrink({ ...drink, category_id: e.target.value })
                    }
                    value={drink.category_id}
                  >
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
                    type="number"
                    placeholder="Prix"
                    value={drink.price}
                    onChange={(e) =>
                      setDrink({ ...drink, price: e.target.value })
                    }
                  />
                </Form.Group>
                <Button variant="warning" onClick={updateDrink}>
                  Modifier
                </Button>
                <Link to="/drinks">
                  <Button variant="warning">Retour</Button>
                </Link>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
