import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
const Login = (props) => {
  return (
    // <Modal show={props.showForm} onHide={props.handleCloseForm}>
    //   <Modal.Header closeButton>
    //     <Modal.Title>Modal heading</Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body>
    //     <InputGroup className="mb-3">
    //       <InputGroup.Text id="inputGroup-sizing-default">
    //         UserName
    //       </InputGroup.Text>
    //       <Form.Control
    //         aria-label="Default"
    //         aria-describedby="inputGroup-sizing-default"
    //       />
    //     </InputGroup>
    //     <br />

    //     <InputGroup className="mb-3">
    //       <InputGroup.Text id="inputGroup-sizing-default">
    //         Password
    //       </InputGroup.Text>
    //       <Form.Control
    //         aria-label="Default"
    //         aria-describedby="inputGroup-sizing-default"
    //       />
    //     </InputGroup>
    //     <br />
    //   </Modal.Body>
    //   <Modal.Footer>
    //     <Button variant="secondary" onClick={props.handleCloseForm}>
    //       Close
    //     </Button>
    //     <Button variant="primary" onClick={props.handleCloseForm}>
    //       Save Changes
    //     </Button>
    //   </Modal.Footer>
    // </Modal>
    <Modal show={props.showForm} onHide={props.handleCloseForm}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.handleCloseForm}>
          Login
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Login;
