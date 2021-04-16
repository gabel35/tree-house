import React from "react";
import { Jumbotron } from 'react-bootstrap';

export default function NavBtn(props) {
    return(
        <Jumbotron className="text-center">
                <img src={props.image} width="60" alt="Logo" />
                </Jumbotron>
    )
}