import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Carousel from "react-bootstrap/Carousel";
import Badge from "react-bootstrap/Badge";
import Modal from "react-bootstrap/Modal";
import pizza1 from "./image/pizza1.jpg";
import pizza2 from "./image/pizza2.jpg";
import pizza3 from "./image/pizza3.jpg";
import menu1 from "./image/menu1.jpg";
import menu2 from "./image/menu2.jpg";
import menu3 from "./image/menu3.jpg";
import menu4 from "./image/menu4.jpg";
import ModalShow from "./Component/ModalShow";
import Menu from "./Component/Menu";
import Slider from "./Component/Slider";
import Header from "./Component/Header";
import { useState } from "react";
function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div className="bg-dark">
      <Container>
        <Header handleShow={handleShow} count={count}></Header>
        <Slider></Slider>
        <Menu handleClick={handleClick}></Menu>
        <ModalShow
          handleClose={handleClose}
          show={show}
          handleShow={handleShow}
        ></ModalShow>
      </Container>
    </div>
  );
}

export default App;
