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
  const [status, setStatus] = useState('');

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

  const sendEvent = () => {
    setSubmit(true);
  };

  // useEffect(() => {
  //   if (status == 'new'){
  //     console.log("after1", status)
  //   }
  //   else{
  //     console.log("after2", status)
  //   }
  // },[status]);

  const submitSignUp = () => {
    // console.log("before", status, submit, fName, lName)
    axios
    .post(api,data)
    .then((response) => setStatus(response.data.status))
    if (submit == true && fName && lName && email && password) {
      props.checkFlag(true, email, fName, lName);
    }
    else{
      props.checkFlag(false)
    } 
  };

  

  return (
    <div>
      <Container>
        <Form onSubmit={submitSignUp}>
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

          <Button variant="primary" type="submit" onClick={() => sendEvent()}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default FormComponent;
