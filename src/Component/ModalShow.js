import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const ModalShow = (props) => {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body className="my-3">
        <div>
          <ol>
            {props.menuQuantity.map((menu, index) => (
              <li key={index}>
                <div className="d-flex justify-content-around align-items-center p-2 ">
                  <div>
                    {menu.name} - Quantity: {menu.quantity}
                  </div>
                  <div>
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
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
        {/* )} */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalShow;
