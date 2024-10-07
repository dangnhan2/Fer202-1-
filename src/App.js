import "./App.css";
import { Container, Row, Col } from "react-bootstrap";

import ModalShow from "./Component/ModalShow";
import Menu from "./Component/Menu";
import Slider from "./Component/Slider";
import Header from "./Component/Header";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const [menuQuantity, setMenuQuantity] = useState([]);

  const handleClick = (item) => {
    setCount((prev) => prev + 1);
    setMenuQuantity((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);

      if (existingItem) {
        // Increment quantity if item exists
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        // Add new item with quantity 1
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const incrementQuantity = (itemId) => {
    setMenuQuantity((prevItems) => {
      setCount((prevCount) => prevCount + 1); // Increase total count
      return prevItems.map((i) =>
        i.id === itemId ? { ...i, quantity: i.quantity + 1 } : i
      );
    });
  };

  const decrementQuantity = (itemId) => {
    setMenuQuantity((prevItems) => {
      const item = prevItems.find((i) => i.id === itemId);

      if (item.quantity > 1) {
        setCount((prevCount) => prevCount - 1); // Decrease total count
        return prevItems.map((i) =>
          i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i
        );
      } else {
        setCount((prevCount) => prevCount - 1); // Decrease total count
        return prevItems.filter((i) => i.id !== itemId); // Remove item if quantity is 0
      }
    });
  };

  return (
    <div className="bg-dark">
      <Container>
        <Header handleShow={handleShow} count={count}></Header>
        <Slider></Slider>
        <Menu handleClick={handleClick}></Menu>
        <ModalShow
          handleIncrement={incrementQuantity}
          handleDecrement={decrementQuantity}
          menuQuantity={menuQuantity}
          handleClose={handleClose}
          handleShow={handleShow}
          show={show}
        ></ModalShow>
      </Container>
    </div>
  );
}

export default App;
