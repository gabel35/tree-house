import React from "react";
import { Container, Row, Col, Jumbotron, Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./style.css";
import Header from '../../components/Header';
import Footer from "../../components/Footer";
// import Customer from "../../assets/icons/customer.svg";
// import Football from "../../assets/icons/football.svg";
// import Dollar from "../../assets/icons/dollar-symbol.svg";
// import Birthday from "../../assets/icons/birthday-cake.svg";
import Add from "../../assets/icons/add.svg";
import ForumNav from "../../components/ForumNav.js";

/* <Col xs="12" sm="3" md="3" lg="3" className="mSb">
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
            </Col> */

function AddPost() {
    return (
    <>
      <Header />
      <div className="Layout">
        <Container>
          <Row>
              <ForumNav />
            <Col xs="12" sm="9" md="9" lg="9">
              <div className="text-center marB">
                <span className="cP">
                  <img src={Add} width="60" alt="Logo" />
                </span>
              </div>

              <Card className="marB">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                  <Card.Title>Primary Card Title</Card.Title>
                  <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                  <div className="text-right">
                    <Button variant="primary">Mail to: tag for DM</Button>
                  </div>
                </Card.Body>
              </Card>

              <Card className="marB">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                  <Card.Title>Primary Card Title</Card.Title>
                  <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                  <div className="text-right">
                    <Button variant="primary">Mail to: tag for DM</Button>
                  </div>
                </Card.Body>
              </Card>

              <Card className="marB">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                  <Card.Title>Primary Card Title</Card.Title>
                  <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
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

export default AddPost;