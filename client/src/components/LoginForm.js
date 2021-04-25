import React, { useState} from 'react';
import { Form } from 'react-bootstrap';
import './LoginForm.css';

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({name: "", email: "", password: ""});

const submitHandler = e => {
    e.preventDefault();

    Login(details);
}

    return (
        <Form onSubmit={submitHandler} className="LoginFormBox">
            <div className="form-inner">
                <h2>Login</h2>
                {/* {error!} */}
                <Form.Group>
                    <Form.Control type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} placeholder="Enter Email" />
                </Form.Group>
                <Form.Group>
                    <Form.Control type="password"  name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} placeholder="Enter Password" />
                </Form.Group>
                <Form.Group>
                    <Link to="/profile">
                        <div className="homepage-btn">
                            <span>
                                <input type="submit" value="LOGIN"/>
                            </span>
                        </div>
                    </Link>
                </Form.Group>
            </div>
        </Form>
    )
}

export default LoginForm
