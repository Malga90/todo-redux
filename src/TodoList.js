import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class TodoList extends React.Component {
  render() {
    return (
      <Container className="justify-content-md-center">
        <Row className="justify-content-md-center">
          <h1>To do list - Redux </h1>
        </Row>

        <InputGroup className="mb-3">
          <FormControl
            placeholder="What would you like to do?"
            aria-label="To do to add"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="info">Add</Button>
          </InputGroup.Append>
        </InputGroup>

        <ListGroup>
          <ListGroup.Item className="d-flex justify-content-between">
            Get a job
            <ButtonGroup>
              <Button variant="success">Done!</Button>
              <Button variant="danger">Remove</Button>
            </ButtonGroup>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between">
            Learn to surf
            <ButtonGroup>
              <Button variant="success">Done!</Button>
              <Button variant="danger">Remove</Button>
            </ButtonGroup>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between">
            Be healthy
            <ButtonGroup>
              <Button variant="success">Done!</Button>
              <Button variant="danger">Remove</Button>
            </ButtonGroup>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between">
            Get driver's licence
            <ButtonGroup>
              <Button variant="success">Done!</Button>
              <Button variant="danger">Remove</Button>
            </ButtonGroup>
          </ListGroup.Item>
        </ListGroup>
      </Container>
    );
  }
}
export default TodoList;
