import React from "react";
import { Container, Row, Col, Jumbotron, Card, Button } from 'react-bootstrap';
import "./style.css";
// import Header from '../../components/Header';
import Pets from "../../assets/icons/icon-pets.svg";
import Sport from "../../assets/icons/icon-sport.svg";
import Sell from "../../assets/icons/icon-sell.svg";
import Events from "../../assets/icons/icon-event.svg";
import Add from "../../assets/icons/add.svg";


function AddPets() {
  return (
    <>
      {/* <Header /> */}
      <div className="Layout">
        <Container>
          <Row>
            <Col xs="12" sm="3" md="3" lg="3" className="mSb">
              <Jumbotron className="text-center">
                <img src={Pets} width="60" alt="Logo" />
              </Jumbotron>
              <Jumbotron className="text-center">
                <img src={Sport} width="60" alt="Logo" />
              </Jumbotron>
              <Jumbotron className="text-center">
                <img src={Sell} width="60" alt="Logo" />
              </Jumbotron>
              <Jumbotron className="text-center">
                <img src={Events} width="60" alt="Logo" />
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
                    <Button variant="primary">Mailto tag for DM</Button>
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
                    <Button variant="primary">Mailto tag for DM</Button>
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
                    <Button variant="primary">Mailto tag for DM</Button>
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
                    <Button variant="primary">Mailto tag for DM</Button>
                  </div>
                </Card.Body>
              </Card>

            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AddPets;
