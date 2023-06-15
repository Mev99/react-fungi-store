import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

const ButtonCategoryList = () => {
  return (
    <Dropdown as={ButtonGroup}>
      <Link to="/">
      <Button variant="success">
        Fungi
      </Button>
      </Link>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      <Dropdown.Menu >
        <Dropdown.Item>
          <Link to="/category/ascomycota"> Ascomycota </Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/category/basidiomycota"> Basidiomycota </Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/category/deuteromycetes"> Deuteromycetes </Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ButtonCategoryList;
