import React from "react";
import { Container, Row, Col, Jumbotron, Card, Button, Badge, ListGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./style.css";
import Header from '../../components/Header';
import Pets from "../../assets/icons/icon-pets.svg";
import Sport from "../../assets/icons/icon-sport.svg";
import Sell from "../../assets/icons/icon-sell.svg";
import Events from "../../assets/icons/icon-event.svg";
import Profile from "../../assets/images/profile.png";

function AddPost() {
  return (
    <>
      <Header />
      <div className="Layout">
        <Container>
          <Row>
            <Col xs="12" sm="4" md="4" lg="4">
              <div className="profileimg">
                <img src={Profile} width="100%" alt="" />
              </div>
              <ListGroup variant="flush">
                <ListGroup.Item><b>Name : </b> Gabriel J. Sanchez</ListGroup.Item>
                <ListGroup.Item><b>Phone : </b> 973 573 4431</ListGroup.Item>
                <ListGroup.Item><b>Email : </b> abc@example.com</ListGroup.Item>
                <ListGroup.Item><b>Details : </b> With supporting text below as a natural lead-in to additional content.</ListGroup.Item>
                <ListGroup.Item><b>Details 2 : </b> With supporting text below as a natural lead-in to additional content.</ListGroup.Item>
                <ListGroup.Item><b>Details 3 : </b> With supporting text below as a natural lead-in to additional content.</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col xs="12" sm="8" md="8" lg="8">
              <Row>
                <Col xs="6" sm="3" md="3" lg="3">
                  <Jumbotron className="text-center">
                    <img src={Customer} width="60" alt="" />
                  </Jumbotron>
                </Col>
                <Col xs="6" sm="3" md="3" lg="3">
                  <Jumbotron className="text-center">
                    <img src={Football} width="60" alt="" />
                  </Jumbotron>
                </Col>
                <Col xs="6" sm="3" md="3" lg="3">
                  <Jumbotron className="text-center">
                    <img src={Dollar} width="60" alt="" />
                  </Jumbotron>
                </Col>
                <Col xs="6" sm="3" md="3" lg="3">
                  <Jumbotron className="text-center">
                    <img src={Birthday} width="60" alt="" />
                  </Jumbotron>
                </Col>
              </Row>

              <Card className="marB">
                <Card.Header className="d-flex">
                  Featured
                  <div className="mlA">
                    <Badge variant="primary">Edit</Badge>
                    <Badge variant="danger">Delete</Badge>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="marB">
                <Card.Header className="d-flex">
                  Featured
                  <div className="mlA">
                    <Badge variant="primary">Edit</Badge>
                    <Badge variant="danger">Delete</Badge>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="marB">
                <Card.Header className="d-flex">
                  Featured
                  <div className="mlA">
                    <Badge variant="primary">Edit</Badge>
                    <Badge variant="danger">Delete</Badge>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="marB">
                <Card.Header className="d-flex">
                  Featured
                  <div className="mlA">
                    <Badge variant="primary">Edit</Badge>
                    <Badge variant="danger">Delete</Badge>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                  </Card.Text>
                </Card.Body>
              </Card>

            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default AddPost;
