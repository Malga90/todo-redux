import React from "react";
import "./App.css";
import ListGroup from "react-bootstrap/ListGroup";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function App() {
  return (
    <div className="App">
      <Container>
        <Row className="justify-content--center">
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
          <ListGroup.Item>
            Get a job
            <Button variant="success" className="justify-content--end">
              Done!
            </Button>
            <Button variant="danger" className="justify-content--end">
              Remove
            </Button>
          </ListGroup.Item>
          <ListGroup.Item>
            Learn to surf <Button variant="success">Done!</Button>
            <Button variant="danger">Remove</Button>
          </ListGroup.Item>
          <ListGroup.Item>
            Be healthy <Button variant="success">Done!</Button>
            <Button variant="danger">Remove</Button>
          </ListGroup.Item>
          <ListGroup.Item>
            Get driver's licence <Button variant="success">Done!</Button>
            <Button variant="danger">Remove</Button>
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </div>
  );
}

export default App;
