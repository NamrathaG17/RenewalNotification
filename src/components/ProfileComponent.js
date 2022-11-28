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

  useEffect((temp) => {
    axios
      .get(
        "https://6yqw23c8h9.execute-api.us-east-1.amazonaws.com/dev/expiryinfo/", {params: {key1: temp}}
      ).then((response) => {
      setExpiryDate(response.data.body);
  }).catch(error => console.error('error'))
  }, [temp]);
   
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
            <Card>
              <h4>Manage your Profile</h4>
              <h5>Account holder: {props.sendData.fName} {props.sendData.lName}</h5>
              <h4>Your subscription next expires on <span style={{color: "green"}}>{expiryDate}</span></h4>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default ProfileComponent;
