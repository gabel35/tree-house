import React, { useState} from 'react';
import { Form } from 'react-bootstrap';
import API from '../utils/API'
import './LoginForm.css';

function SignUp() {

    const [user, setUser] = useState('')

    function handleInputChange(event) {
        const { name, value } = event.target;
        setUser({...user, [name]: value})
      };

      function handleFormSubmit(event) {
        event.preventDefault();
        if (user.firstName && user.lastName && user.phone && user.email && user.apt && user.password) {
            console.log("frontest-end user", user)
            API.saveUser(user)
            .catch(err => console.log(err));
        }
      };


    return (
        <Form className="LoginFormBox">
            <div className="form-inner">
                <h2>Sign Up</h2>
                {/* {error!} */}
                <Form.Group>
                    <Form.Control type="text" name="firstName" id="name" placeholder="First Name" onChange={handleInputChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Control type="text" name="lastName" id="name" placeholder="Last Name" onChange={handleInputChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Control type="phone" name="phone" id="name" placeholder="Phone Number" onChange={handleInputChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Control type="email" name="email" id="email" placeholder="Enter Email" onChange={handleInputChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Control as="textarea" rows={3} name="apt" placeholder="Enter Apartment" onChange={handleInputChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Control type="password"  name="password" id="password" placeholder="Enter Password" onChange={handleInputChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Control type="password"  name="password" id="password" placeholder="Enter Repeat Password" />
                </Form.Group>
                <Form.Group>
                    <div className="homepage-btn">
                        <span>
                            <input type="submit" value="SIGN UP" onClick={handleFormSubmit} />
                        </span>
                    </div>
                </Form.Group>
            </div>
        </Form>
    )
}

export default SignUp;
