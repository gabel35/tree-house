import React from "react";
import { Col } from 'react-bootstrap';
import Customer from "../assets/icons/customer.svg";
import Football from "../assets/icons/football.svg";
import Dollar from "../assets/icons/dollar-symbol.svg";
import Birthday from "../assets/icons/birthday-cake.svg";
import NavBtn from "./NavBtn.js";

export default function ForumNav(props) {
    return (
        <Col xs="12" sm="3" md="3" lg="3" className="mSb">
                <NavBtn image={Customer} />
                <NavBtn image={Football} />
                <NavBtn image={Dollar} />
                <NavBtn image={Birthday} />
        </Col>
    )
}