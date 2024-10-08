import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import menu1 from "../image/menu1.jpg";
import menu2 from "../image/menu2.jpg";
import menu3 from "../image/menu3.jpg";
import menu4 from "../image/menu4.jpg";
const menuArrays = [
  {
    id: 1,
    name: "Pizza 1",
    price: 15.99,
    image: menu1,
  },
  {
    id: 2,
    name: "Pizza 2",
    price: 15.99,
    image: menu2,
  },
  {
    id: 3,
    name: "Pizza 3",
    price: 15.99,
    image: menu3,
  },
  {
    id: 4,
    name: "Pizza 3",
    price: 15.99,
    image: menu4,
  },
];
const Menu = (props) => {
  return (
    <>
      <Row>
        <h1 style={{ color: "#fff" }}>Our Menu</h1>
      </Row>
      <Row>
        {menuArrays.map((menu) => {
          return (
            <Col key={menu.id}>
              <Card>
                <Card.Img variant="top" src={menu.image} />
                <Card.Body className="text-center">
                  <Card.Title>{menu.name}</Card.Title>
                  <Card.Text>Price: 15.99</Card.Text>
                  <Button
                    variant="outline-warning"
                    onClick={() => props.handleClick(menu)}
                  >
                    <i class="bi bi-cart"></i>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};
export default Menu;
