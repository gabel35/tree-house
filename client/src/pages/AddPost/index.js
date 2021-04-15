import React from "react";
import { Container, Row, Col, Jumbotron, Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./style.css";
import Header from '../../components/Header';
import Footer from "../../components/Footer";
import Customer from "../../assets/icons/customer.svg";
import Football from "../../assets/icons/football.svg";
import Dollar from "../../assets/icons/dollar-symbol.svg";
import Birthday from "../../assets/icons/birthday-cake.svg";
import Add from "../../assets/icons/add.svg";

function AddPost() {
    return (
    <>
      <Header />
      <div className="Layout">
        <Container>
          <Row>
            <Col xs="12" sm="3" md="3" lg="3" className="mSb">
                <Jumbotron className="text-center">
                <img src={Customer} width="60" alt="Logo" />
                </Jumbotron>
                <Jumbotron className="text-center">
                <img src={Football} width="60" alt="Logo" />
                </Jumbotron>
                <Jumbotron className="text-center">
                <img src={Dollar} width="60" alt="Logo" />
                </Jumbotron>
                <Jumbotron className="text-center">
                <img src={Birthday} width="60" alt="Logo" />
                </Jumbotron>
            </Col>
            <Col xs="12" sm="9" md="9" lg="9">
              <div className="text-center marB">
                <span className="cP">
                  <img src={Add} width="60" alt="Logo" />
                </span>
              </div>

              <Card className="marB">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                  </Card.Text>
                  <div className="text-right">
                    <Button variant="primary">Mail to: tag for DM</Button>
                  </div>
                </Card.Body>
              </Card>

              <Card className="marB">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                  </Card.Text>
                  <div className="text-right">
                    <Button variant="primary">Mail to: tag for DM</Button>
                  </div>
                </Card.Body>
              </Card>

              <Card className="marB">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                  </Card.Text>
                  <div className="text-right">
                    <Button variant="primary">Mail to: tag for DM</Button>
                  </div>
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
