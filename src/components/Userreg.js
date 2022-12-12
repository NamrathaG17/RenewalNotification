import './Userreg.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CarouselComponent from './CarouselComponent'
import FormComponent from './FormComponent'
import MagzineComponent from './MagzineComponent';
import React, {useState} from 'react';

function Userreg() {
  const [displaySignUp, setDisplaySignUp] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const [fname, setfname] = useState('')
  const [lname, setlname] = useState('')

  const checkFlag = (signUp, email, fname, lname) => {
    setDisplaySignUp(signUp)
    setfname(fname)
    setlname(lname)
    setUserEmail(email)
  }

  const isLoggedin = (value) => {
    setDisplaySignUp(value)
  }

  const data = {
    fName: fname,
    lName: lname,
    emailId: userEmail
  }

  return (
    <div className="bg-darks">
        <Container>
              { displaySignUp ?   
                (
                  <div>
                    <Row>
                      <Col>
                        <MagzineComponent profileData = {data} isLoggedin = {isLoggedin}></MagzineComponent>
                      </Col> 
                    </Row>
                  </div>
                ) : (
                  <div>
                    <Row>
                      <Col><CarouselComponent></CarouselComponent></Col>
                      <Col className="signup-form"><FormComponent checkFlag = {checkFlag}></FormComponent></Col>
                    </Row>
                </div> 
               )}
            
        </Container>
    </div>
  );
}

export default Userreg;
