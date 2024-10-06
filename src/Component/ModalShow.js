import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const ModalShow = (props) => {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body className="my-3">
        {props.menuQuantity.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {props.menuQuantity.map((menu, index) => (
              <li key={index}>
                {menu.name} - Quantity: {menu.quantity}
                <Button
                  variant="primary"
                  className="mx-2"
                  onClick={() => props.handleIncrement(menu.id)}
                >
                  +
                </Button>
                <Button
                  variant="danger"
                  onClick={() => props.handleDecrement(menu.id)}
                >
                  -
                </Button>
              </li>
            ))}
          </ul>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="primary">Understood</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalShow;
