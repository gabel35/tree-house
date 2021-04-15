import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "./style.css";
import Header from '../../components/Header';
import Footer from "../../components/Footer";
import Posts from "../../components/PostTemplate";

function TreeHouseForum() {
  return (
    <>
    <Header />
    <div className="Layout">
      <Container>
        <Row>
          <Col xs="12" sm="4" md="4" lg="4">
            <Posts />
          </Col>
          <Col xs="12" sm="4" md="4" lg="4">
            <Posts />
          </Col>
          <Col xs="12" sm="4" md="4" lg="4">
            <Posts />
          </Col>
        </Row>
      </Container>
    </div>
    <Footer />
  </>
  );
}

export default TreeHouseForum;
