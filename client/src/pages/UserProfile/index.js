import React from "react";
import { Container, Row, Col, Jumbotron, Card, Button, Badge, ListGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./style.css";
import Header from '../../components/Header';
import Footer from "../../components/Footer";
import Customer from "../../assets/icons/customer.svg";
import Football from "../../assets/icons/football.svg";
import Dollar from "../../assets/icons/dollar-symbol.svg";
import Birthday from "../../assets/icons/birthday-cake.svg";
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
                <ListGroup.Item><b>Name: </b> Gabriel J. Sanchez</ListGroup.Item>
                <ListGroup.Item><b>Phone: </b> 123 456 7890</ListGroup.Item>
                <ListGroup.Item><b>Email: </b> abc@example.com</ListGroup.Item>
                <ListGroup.Item><b>Details 1: </b> With supporting text below as a natural lead-in to additional content.</ListGroup.Item>
                <ListGroup.Item><b>Details 2: </b> With supporting text below as a natural lead-in to additional content.</ListGroup.Item>
                <ListGroup.Item><b>Details 3: </b> With supporting text below as a natural lead-in to additional content.</ListGroup.Item>
              </ListGroup>
            </Col>