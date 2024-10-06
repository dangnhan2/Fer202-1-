import Carousel from "react-bootstrap/Carousel";
import pizza1 from "../image/pizza1.jpg";
import pizza2 from "../image/pizza2.jpg";
import pizza3 from "../image/pizza3.jpg";
import { Container, Row, Col } from "react-bootstrap";
const Slider = () => {
  return (
    <>
      <Row>
        <Carousel className="my-3">
          <Carousel.Item>
            <img src={pizza1} />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={pizza2} />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={pizza3} />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
    </>
  );
};
export default Slider;
