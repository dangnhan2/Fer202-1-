import Button from "react-bootstrap/Button";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";
import { Container, Row } from "react-bootstrap";

const Header = (props) => {
  return (
    <Row>
      <Navbar expand="lg" className="bg-dark d-flex">
        <Container fluid>
          <Navbar.Brand href="#" style={{ color: "#fff" }}>
            Navbar scroll
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="bg-light" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1" style={{ color: "#fff" }}>
                Home
              </Nav.Link>
              <Nav.Link href="#action2" style={{ color: "#fff" }}>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">
                <i class="bi bi-search"></i>
              </Button>
            </Form>

            <Button className="mx-2" variant="outline-warning">
              <i className="bi bi-person" onClick={props.handleShowForm}></i>
            </Button>

            <Button
              variant="primary"
              className="ms-1 my-2"
              onClick={props.handleShow}
            >
              <i class="bi bi-cart"></i>
              <Badge bg="secondary">{props.count}</Badge>
              <span className="visually-hidden">unread messages</span>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};
export default Header;
