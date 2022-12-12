import Carousel from 'react-bootstrap/Carousel';

function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1666160399564-8774cf0e70bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
          alt="First slides"
        />
        <Carousel.Caption>
          <h3>Magazine on the go</h3>
          <p>Digital magazine with best articles and images on a single site</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1665281402666-d1c9eb047738?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Hassel free experience</h3>
          <p>Pay for only the months you use. Just a sign up needed</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1666160399566-cae2609cbf6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Renewal expiry alerts</h3>
          <p>
            Email sent to notify you on your account expiry 
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;