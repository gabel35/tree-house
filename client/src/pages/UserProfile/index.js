import React, { useState, useEffect } from "react";
import { Container, Row, Col, Jumbotron, Card, Button, Badge, ListGroup, Alert } from 'react-bootstrap';
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
import API from "../../utils/API";

import { getPostData, editPostData } from '../../utils/Posts'

function AddPost() {

  const [user, setUser] = useState([]);

  useEffect(() => {
    loadUser()
  }, [])

  function loadUser() {
    API.getUser()
      .then(res => {
        console.log(res)
        setUser(res)
      })
      .catch(err => console.log(err))
  }

  const [petsData, setPetData] = useState([]);
  const [childrenData, setChilrenData] = useState([]);
  const [eventData, setEventData] = useState([]);
  const [sportData, setSportData] = useState([]);
  const [noAdData, setAdData] = useState(false);

  useEffect(() => {

    setPetData(getPostData('pets'))
    setChilrenData(getPostData('children'))
    setEventData(getPostData('events'))
    setSportData(getPostData('sport'))

  }, [])

  useEffect(() => {
    if (petsData.length == 0 && childrenData.length == 0 && eventData.length == 0 && sportData.length == 0) {
      setAdData(true)
    } else {
      setAdData(false)
    }

  }, [petsData, childrenData, eventData, sportData])



  function deletehandler(id, type) {
    let filterAd = getPostData(type).filter(data => data.id != id)
    editPostData(filterAd, type)

    switch (type) {
      case 'pets':
        setPetData(filterAd)
        break;
      case 'children':
        setChilrenData(filterAd)
        break;
      case 'sport':
        setSportData(filterAd)
        break;
      case 'events':
        setEventData(filterAd)
        break;
    }

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
              {noAdData &&
                <Row>
                  <Col xs="12" sm="12" md="12" lg="12" className="text-center">
                    <Alert variant="success">
                      There is no Ad link in your accounts
                    </Alert>
                  </Col>
                </Row>

              }
              {petsData.length > 0 &&
                <Row>
                  <Col xs="12" sm="12" md="12" lg="12" className="text-center">
                    <Alert variant="success">
                      Pets
    </Alert>
                  </Col>
                  {petsData.map(item => (
                    <>
                      <Col xs="12" sm="6" md="6" lg="6">
                        <Posts data={item} handler={deletehandler} type="pets" />
                      </Col>
                    </>
                  ))}
                </Row>

              }

              {childrenData.length > 0 &&
                <Row>
                  <Col xs="12" sm="12" md="12" lg="12" className="text-center">
                    <Alert variant="success">
                      Children
                </Alert>
                  </Col>
                  {childrenData.map(item => (
                    <>
                      <Col xs="12" sm="6" md="6" lg="6">
                        <Posts data={item} handler={deletehandler} type="children" />
                      </Col>
                    </>
                  ))}
                </Row>
              }
              {eventData.length > 0 &&
                <Row>
                  <Col xs="12" sm="12" md="12" lg="12" className="text-center">
                    <Alert variant="success">
                      Event
                </Alert>
                  </Col>
                  {eventData.map(item => (
                    <>
                      <Col xs="12" sm="6" md="6" lg="6">
                        <Posts data={item} handler={deletehandler} type="events" />
                      </Col>
                    </>
                  ))}
                </Row>
              }

              {sportData.length > 0 &&
                <Row>
                  <Col xs="12" sm="12" md="12" lg="12" className="text-center">
                    <Alert variant="success">
                      Sport
                </Alert>
                  </Col>
                  {sportData.map(item => (
                    <>
                      <Col xs="12" sm="6" md="6" lg="6">
                        <Posts data={item} handler={deletehandler} type="sport" />
                      </Col>
                    </>
                  ))}
                </Row>
              }

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
