import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import React, { useState, useEffect } from "react";
import axios from "axios";

function ProfileComponent(props) {
  const [expiryDate, setExpiryDate] = useState('');
  const temp = props.sendData.emailId
  const [message, setMessage] = useState('')

  const sendData = {
    'emailId' : temp
  }

  useEffect(() => {
    fetchExpiry()
  }, [temp]);

  const fetchExpiry = () => {
    axios
      .get(
        "https://6yqw23c8h9.execute-api.us-east-1.amazonaws.com/dev/expiryinfo/", {params: {key1: temp}}
      ).then((response) => {
      setExpiryDate(response.data.body);
  }).catch(error => console.error('error'))
  }

  const renewAction = () => { 
    axios
    .post("https://6yqw23c8h9.execute-api.us-east-1.amazonaws.com/dev/renewaccount",sendData)
    .then((response) => {
      setMessage(response.data.body)
    })
    fetchExpiry()
  }
   
  return ( 
    <div className="bg-darks">
      <Container className="vh-100 d-flex flex-column">
        <Row className="profile-style">
          <Col>  
            <div>
              <Image
                className="profile-img"
                roundedCircle
                src="https://img.freepik.com/premium-vector/anonymous-user-flat-icon-vector-illustration-with-long-shadow_520826-1932.jpg"
              />
            </div>
            <h4 style={{color: 'red'}}>{message}</h4>
            <Card>
              <h4>Manage your Profile</h4>
              <h5>Account holder: {props.sendData.fName} {props.sendData.lName}</h5>
              <h4>Your subscription next expires on <span style={{color: "green"}}>{expiryDate}</span></h4>
              <href onClick={renewAction}>Please click to renew automatically</href>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default ProfileComponent;
