import "./Userreg.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useEffect, useState } from "react";
import axios from "axios";

function FormComponent(props) {
  const [submit, setSubmit] = useState(false);
  const [fName, setFName] = useState();
  const [lName, setLName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [status, setStatus] = useState(false);

  const api = 'https://6yqw23c8h9.execute-api.us-east-1.amazonaws.com/dev/userdetails';
  const data = { "emailId": email, "firstName": fName, "lastName": lName, "password": password};

  const handleFName = (event) => {
    setFName(event.target.value);
  };

  const handleLName = (event) => {
    setLName(event.target.value);
  };

  const handleInputEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const sendEvent = (event) => {
    event.preventDefault()
    submitSignUp(true)
  };

  const submitSignUp = (submit1) => {
    axios
    .post(api,data)
    .then((response) => {
      if (response.data.status == 'new' && submit1 == true && fName && lName && email && password) {
        props.checkFlag(true, email, fName, lName);
      }
      else{
        props.checkFlag(false)
        setStatus(true)
      } 
    })
   
  };


  return (
    <div>
      <Container>
      { status ? (<h3 className="text-color">Your email exists with us, please use different email</h3>) : (<h3 className="text-color">Sign Up</h3>)}
        <Form>
          <Form.Group className="mb-3">
            <Form.Label className="text-color">First Name</Form.Label>
            <Form.Control
              type="text"
              value={fName} 
              onChange={handleFName}
              placeholder="Enter your first name"
              required
            />
          </Form.Group> 

          <Form.Group className="mb-3">
            <Form.Label className="text-color">Last Name</Form.Label>
            <Form.Control
              type="text"
              value={lName}
              onChange={handleLName}
              placeholder="Enter your last name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="text-color">Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={handleInputEmail}
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted text-color">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="text-color">Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={handlePassword}
              placeholder="Password"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              className="text-color"
              type="checkbox"
              label="I have read and accepted the terms and conditions"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={(e) => sendEvent(e)}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default FormComponent;
