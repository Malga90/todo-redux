import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

class ListElement extends React.Component {
  render() {
    return (
      <ListGroup.Item className="d-flex justify-content-between">
        {this.props.content}
        <ButtonGroup>
          <Button variant="success">Done!</Button>
          <Button variant="danger">Remove</Button>
        </ButtonGroup>
      </ListGroup.Item>
    );
  }
}
export default ListElement;
