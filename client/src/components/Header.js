import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';
import Logo from "../assets/images/logo.png";
import "./Header.css"
import Emails from "../assets/icons/envelope.svg";
import User from "../assets/icons/User.svg";
import LeftArrow from "../assets/icons/left-arrow.svg";

const Header = (props) => {
  return (
    <div className="Header">
      <Container>
        <Row>
            <Col xs={4}>
                <div className="d-flex align-items-center">
                    <Link to="/" className="mr50">
                        <img src={LeftArrow} width="5" alt="Logo" /> Back
                    </Link>
                    <img src={Logo} width="5" alt="Logo" />
                </div>
            </Col>
            <Col xs={8} className="d-flex align-items-center">
                <div className="ml-auto">
                    <Button className="bgN" href="mailto:abc@example.com">
                        <img src={Emails} width="5" alt="Logo" />
                    </Button>
                    <Link to="/profile" className="mr10">
                        <img src={User} width="5" alt="Logo" />
                    </Link>
                    <Button variant="info" href="/">Log Out</Button>
                </div>
            </Col>
        </Row>
        </Container>
    </div>
  );
};

export default Header;
