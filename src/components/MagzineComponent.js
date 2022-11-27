import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import ProfileComponent from "./ProfileComponent";
import "./Magzine.css";
import { useState } from "react";

function MagzineComponent(props) {
  const [isProfile, setIsProfile] = useState(false)
  const transferData = props

  return (
    <div>
      <Navbar class="nav-text" bg="dark" variant="dark">
        <Navbar.Brand href="#home">New Release</Navbar.Brand>
        <Navbar.Brand href="#home">Global</Navbar.Brand>
        <Navbar.Brand href="#home">Regional</Navbar.Brand>
        <Navbar.Brand href="#home">Cook Books</Navbar.Brand>
        <Navbar.Brand href="#home">Educationl</Navbar.Brand>
        <Navbar.Brand href="#home">Fictional</Navbar.Brand>
        <Navbar.Brand href="" onClick={() => {setIsProfile(true)}}>Profile</Navbar.Brand>
      </Navbar>
      <Container>
      { isProfile ? (
        <div>
          <ProfileComponent sendData = {transferData}></ProfileComponent>
        </div>
      ) : (
        <div>
          
            <Row>
              <Col className="text-color">
                <p>
                  This site features a detailed magazine grading guide, a
                  resource page with links to various galleries of magazine
                  cover images and checklists, and even a guide for both buyers
                  and sellers telling how to best pack and ship your old
                  magazines.
                </p>
              </Col>
            </Row>
            <div>
              <Row>
                <Col>
                  <Card class="card-style">
                    <Card.Img
                      class="card-img"
                      src="https://shop.cricketmedia.com/media/catalog/product/cache/7c7343c143d3029c9f7210fd8c797c32/m/u/muse-magazine-february-2017_4_1_1.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Climate reality</Card.Title>
                      <Card.Text>
                        My latest article for Muse magazine tells the story of
                        two teams of high school kids. They invented...
                      </Card.Text>
                      <Button variant="primary">Add to cart</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card class="card-style">
                    <Card.Img
                      class="card-img"
                      src="https://www.oldimprints.com/pictures/medium/50403.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Bazaar</Card.Title>
                      <Card.Text>
                        Harper's Bazaar is an American monthly women's fashion
                        magazine.
                      </Card.Text>
                      <Button variant="primary">Add to cart</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card class="card-style">
                    <Card.Img
                      class="card-img"
                      src="https://www.bakefromscratch.com/wp-content/uploads/2016/04/BakeCvr-Winter2016-l-scaled.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Bake from scratch</Card.Title>
                      <Card.Text>
                        Each page of this publication features stunning
                        photography, easy-to-follow recipes, techniques for
                        creating beautiful, artisan baked goods...
                      </Card.Text>
                      <Button variant="primary">Add to cart</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card class="card-style">
                    <Card.Img
                      class="card-img"
                      src="https://www.blufashion.com/wp-content/uploads/2020/05/Allure-Magazine.jpg"
                    />
                    <Card.Body>
                      <Card.Title>The art of beauty</Card.Title>
                      <Card.Text>
                        Allure February 2020 Billy Porter - The Art of Beauty
                        (Magazine: Beauty)
                      </Card.Text>
                      <Button variant="primary">Add to cart</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card class="card-style">
                    <Card.Img
                      class="card-img"
                      src="https://m.media-amazon.com/images/I/51ii6LqFAOL._AC_SY550_.jpg"
                    />
                    <Card.Body>
                      <Card.Title>The world</Card.Title>
                      <Card.Text>
                        The Word circulates to the households of all members of
                        the Antiochian Archdiocese and other...
                      </Card.Text>
                      <Button variant="primary">Add to cart</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card class="card-style">
                    <Card.Img
                      class="card-img"
                      src="https://files.magzter.com/resize/magazine/1338193253/1593707085/view/1.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Forbes India</Card.Title>
                      <Card.Text>
                        Forbes India is your destination for business, stock
                        market, startup and...
                      </Card.Text>
                      <Button variant="primary">Add to cart</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          
        </div>
      )}
      </Container>
    </div>
  );
}

export default MagzineComponent;
