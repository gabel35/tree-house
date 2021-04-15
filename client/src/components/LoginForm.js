import React, { useState} from 'react'
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
                    <Form.Control type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} placeholder="Enter Name" />
                </Form.Group>
                <Form.Group>
                    <Form.Control type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} placeholder="Enter Email" />
                </Form.Group>
                <Form.Group>
                    <Form.Control type="password"  name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} placeholder="Enter Password" />
                </Form.Group>
                <Form.Group>
                    <div className="homepage-btn">
                        <span>
                            <input type="submit" value="LOGIN" />
                        </span>
                    </div>
                </Form.Group>
        <form onSubmit={submitHandler}>
        <div className="form-inner">
            <h2>Login</h2>
            {(error !="") ? ( <div className="error">{error}</div>) : ""}
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id ="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
                </div>
                <div className="form-group">
                    <label htmlFor ="email">Email:</label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
                </div> 
                <div className="form-group">
                    <label htmlFor ="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div> 
                <input type="submit" value="LOGIN"></input>
            </div>
        </Form>
    )
}

export default LoginForm
