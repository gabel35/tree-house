import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import "./LoginForm.css";
import API from "../utils/API";

function LoginForm() {
  //     const [details, setDetails] = useState({email: "", password: ""});

  // const submitHandler = e => {
  //     e.preventDefault();

  // Login(details);
  // }

  const [user, setUser] = useState("");

  function handleInputChange(event) {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    localStorage.setItem("email", user.email);
  }

  // function handleFormSubmit(event) {
  //   event.preventDefault();
  //   if (user.email && user.password) {
  //     // console.log("Account created")
  //     API.login(user).catch((err) => console.log(err));
  //   }
  // }

  return (
    <Form className="LoginFormBox">
      <div className="form-inner">
        <h2>Login</h2>
        {/* {error!} */}
        <Form.Group>
          <Form.Control
            type="email"
            name="email"
            id="email"
            onChange={handleInputChange}
            placeholder="Enter Email"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            name="password"
            id="password"
            onChange={handleInputChange}
            placeholder="Enter Password"
          />
        </Form.Group>
        <Form.Group>
          <Link to="/profile">
            <div className="homepage-btn">
              <span>
                <input type="submit" value="LOGIN" />
              </span>
            </div>
          </Link>
        </Form.Group>
      </div>
    </Form>
  );
}

export default LoginForm;
