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
                <Form.Group>
                    <Form.Control type="phone" name="name" id="name" placeholder="Phone Number" />
                </Form.Group>
                <Form.Group>
                    <Form.Control type="email" name="email" id="email" placeholder="Enter Email" />
                </Form.Group>
                <Form.Group>
                    <Form.Control as="textarea" rows={3} placeholder="Enter Apartment" />
                </Form.Group>
                <Form.Group>
                    <Form.Control type="password"  name="password" id="password" placeholder="Enter Password" />
                </Form.Group>
                <Form.Group>
                    <Form.Control type="password"  name="password" id="password" placeholder="Enter Repeat Password" />
                </Form.Group>