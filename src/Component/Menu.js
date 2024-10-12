import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { getMenu } from "../Service/Service";
import { useEffect, useState } from "react";

const Menu = (props) => {
  const [menu, setMenus] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let res = await getMenu();
    // console.log(res.data.data);
    setMenus(res.data.data);
  };
  return (
    <>
      <Row>
        <h1 style={{ color: "#fff" }}>Our Menu</h1>
      </Row>
      <Row>
        {menu.map((menu) => {
          return (
            <Col
              key={menu.id}
              className="col-12 col-sm-3 my-2"
              xs={12}
              sm={6}
              md={3}
            >
              <Card className="h-100">
                <Card.Img variant="top" src={menu.image} />

                <Card.Body className="text-center">
                  <Card.Title>{menu.title}</Card.Title>
                  <div className="d-flex  flex-column">
                    <Card.Text>
                      {menu.salePrice ? (
                        <>
                          <span
                            className={
                              menu.salePrice
                                ? "text-decoration-line-through"
                                : ""
                            }
                          >
                            ${menu.price}
                          </span>
                          <br></br>
                          <span>${menu.salePrice}</span> <br></br>{" "}
                        </>
                      ) : (
                        <>
                          <div className="h-auto">${menu.price}</div>
                          <br></br>
                        </>
                      )}
                    </Card.Text>
                    <Button
                      variant="outline-warning"
                      onClick={() => props.handleClick(menu)}
                    >
                      <i className="bi bi-cart"></i>
                    </Button>
                  </div>
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
