import "bootstrap-icons/font/bootstrap-icons.css";
import {
  Container,
  Row,
  Dropdown,
  Button,
  Nav,
  Navbar,
  Form,
  Badge,
} from "react-bootstrap";
import { UserContext } from "../Context/UserContext";
import { useContext, useEffect } from "react";
const Header = (props) => {
  const { username, status, setStatus, setUsername, setPassword } =
    useContext(UserContext);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
      setStatus(true); // Assume logged in if username is in localStorage
    }
  }, [setUsername, setStatus]);

  const handleLogout = () => {
    localStorage.removeItem("username");
    setStatus(false);
    setUsername("");
    setPassword("");
  };

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

            <Button
              variant="primary"
              className="ms-1 my-2"
              onClick={props.handleShow}
            >
              <i class="bi bi-cart"></i>
              <Badge bg="secondary">{props.count}</Badge>
              <span className="visually-hidden">unread messages</span>
            </Button>

            {status ? (
              <>
                <div className="ms-2" style={{ color: "white" }}>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="outline-warning"
                      style={{ border: "none" }}
                    >
                      Welcome: <b>{username}</b>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item onClick={handleLogout}>
                        <i class="bi bi-box-arrow-right"></i>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </>
            ) : (
              <Button className="mx-2" variant="outline-warning">
                <i className="bi bi-person" onClick={props.handleShowForm}></i>
              </Button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default Header;
