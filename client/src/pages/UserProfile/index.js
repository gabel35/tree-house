import React, { useState, useEffect } from "react";
import { Container, Row, Col, Jumbotron, Card, Button, Badge, ListGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./style.css";
import Sidebar from '../../components/Sidebar';
import Footer from "../../components/Footer";
import Customer from "../../assets/icons/customer.svg";
import Football from "../../assets/icons/football.svg";
import Dollar from "../../assets/icons/dollar-symbol.svg";
import Birthday from "../../assets/icons/birthday-cake.svg";
import Profile from "../../assets/images/profile.png";
import Posts from "../../components/PostTemplate";

import { getPostData, editPostData } from '../../utils'

function AddPost() {

  const [postData, setPostData] = useState([]);

  useEffect(() => {

    setPostData(getPostData())

  }, [])

  function deletehandler(id) {
    let filterAd = getPostData().filter(data => data.id != id)
    setPostData(filterAd)
    editPostData(filterAd)

  }

  return (
    <>
      <Sidebar />
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
                  <Link to="/children">
                    <Jumbotron className="text-center">
                      <img src={Customer} width="60" alt="" />
                    </Jumbotron>
                  </Link>
                </Col>
                <Col xs="6" sm="3" md="3" lg="3">
                  <Link to="/sport">
                    <Jumbotron className="text-center">
                      <img src={Football} width="60" alt="" />
                    </Jumbotron>
                  </Link>
                </Col>
                <Col xs="6" sm="3" md="3" lg="3">
                  <Link to="/pets">
                    <Jumbotron className="text-center">
                      <img src={Dollar} width="60" alt="" />
                    </Jumbotron>
                  </Link>
                </Col>
                <Col xs="6" sm="3" md="3" lg="3">
                  <Link to="/events">
                    <Jumbotron className="text-center">
                      <img src={Birthday} width="60" alt="" />
                    </Jumbotron>
                    </Link>
                </Col>
              </Row>

              <Row>
                {postData.map(item => (
                  <>
                    <Col xs="12" sm="6" md="6" lg="6">
                      <Posts data={item} handler={deletehandler} />
                    </Col>
                  </>
                ))}
              </Row>


              {/* <Card className="marB">
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
              </Card> */}

            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default AddPost;
