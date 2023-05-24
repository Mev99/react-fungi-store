import React from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Dropdown from 'react-bootstrap/Dropdown'

const itemListContainer = () => {
  return (
    <Dropdown as={ButtonGroup}>
    <Button variant="success">Fungi</Button>

    <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

    <Dropdown.Menu>
      <Dropdown.Item href="#">Psylocibe</Dropdown.Item>
      <Dropdown.Item href="#">Shitake</Dropdown.Item>
      <Dropdown.Item href="#">Pine</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  )
}

export default itemListContainer