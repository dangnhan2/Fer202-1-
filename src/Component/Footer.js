import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Row, Col, Button } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Row>
        <h1 style={{ color: "#fff" }} className="text-center my-3">
          Book Your Table
        </h1>
      </Row>
      <Row>
        <Col>
          <FloatingLabel
            controlId="floatingInput"
            label="Your name* "
            className="mb-3"
          >
            <Form.Control type="text" placeholder="" />
          </FloatingLabel>
        </Col>

        <Col>
          <FloatingLabel controlId="floatingPassword" label="Your email*">
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
        </Col>

        <Col>
          <FloatingLabel controlId="floatingSelect" label="Select a menu">
            <Form.Select aria-label="Floating label select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
      </Row>

      <Row>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={3} placeholder="Comment" />
        </Form.Group>
      </Row>

      <Button variant="warning" className="col-3 my-2">
        Send Message
      </Button>
    </>
  );
};

export default Footer;
