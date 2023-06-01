import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Col, Container, Row, Alert, Badge } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function Delete() {
  //Delete a drink
  const [message, setMessage] = useState("");
  const { id } = useParams();
  const url = `http://localhost:8800/api/drinks/${id}`;
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token") && !localStorage.getItem("userId")) {
      navigate("/");
    }
  });
  useEffect(() => {
    const deleteDrink = async (id) => {
      const confirm = window.confirm(
        "Voulez vous vraiment supprimer cet article ?"
      );
      if (confirm) {
        try {
          await Axios.delete(url);
          setMessage("Article supprimé avec succès !");
        } catch (error) {
          console.log(error);
        }
      } else {
        navigate("/drinks");
      }
    };
    deleteDrink();
  }, [url, navigate]);
  return (
    <div>
      <section className="my-5 py-5" id="drink-delete">
        <Container>
          <Row>
            <Col md="6">
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
        </Container>
      </section>
    </div>
  );
}
