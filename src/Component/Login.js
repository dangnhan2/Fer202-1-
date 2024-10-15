import { Button, Modal, Form } from "react-bootstrap";
import { useContext } from "react";
import { login } from "../Service/Service";
import { UserContext } from "../Context/UserContext";
const Login = (props) => {
  const { username, password, handlePassword, handleUsername, setStatus } =
    useContext(UserContext);
  const handleLogin = async () => {
    let res = await login(username, password);
    console.log(res.status);
    if (res && res.status === 200) {
      setStatus(true);
      localStorage.setItem("username", username);
      props.handleCloseForm();
    }
  };
  return (
    <Modal show={props.showForm} onHide={props.handleCloseForm}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={username}
              onChange={handleUsername}
              type="email"
              placeholder="name@example.com"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={handlePassword}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleLogin}>
          Login
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Login;
