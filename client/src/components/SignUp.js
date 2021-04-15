import React, { useState} from 'react';
import { Form } from 'react-bootstrap';
import './LoginForm.css';

function SignUp() {

    return (
        <Form className="LoginFormBox">
            <div className="form-inner">
                <h2>Sign Up</h2>
                {/* {error!} */}
                <Form.Group>
                    <Form.Control type="text" name="name" id="name" placeholder="First Name" />
                </Form.Group>
                <Form.Group>
                    <Form.Control type="text" name="name" id="name" placeholder="Last Name" />
                </Form.Group>