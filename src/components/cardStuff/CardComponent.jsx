import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import ButtonOutlinedDefault from "../buttons/ButtonOutlinedDefault";
import ButtonContainedDefault from "../buttons/ButtonContainedDefault";
import { Input } from "@mui/material";
import { CartContext } from "../../context/CartContext";
import CardButtons from "./CardButtons";

const CardComponent = ({ products }) => {
  return (
    <Card style={{ width: "18rem", flexBasis: "auto" }}>
      <Card.Img variant="top" src={products.imgSrc} />
      <Card.Body>
        <Card.Title>{products.nombre}</Card.Title>
        <Card.Text>{products.descripcion}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          Hongo {products.unicelular ? "Unicelular" : "Pluricelular"}
        </ListGroup.Item>
        <ListGroup.Item>
          {products.letal ? "Puede ser letal" : "No es letal"}
        </ListGroup.Item>
        <ListGroup.Item>${products.precio} / kg </ListGroup.Item>
        <ListGroup.Item>Stock: {products.stock}</ListGroup.Item>
      </ListGroup>

      <Card.Body>
        <div>
          <CardButtons />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "5px",
          }}
        >
          <Link to={`/item/${products.id}`}>
            <ButtonContainedDefault text={"Detalle"} />
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
