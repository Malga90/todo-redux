import React from "react";
import ListElement from "./ListElement";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class TodoList extends React.Component {
  render() {
    return (
      <Container className="justify-content-md-center">
        <Row className="justify-content-md-center">
          <h1>To do list - React </h1>
        </Row>
        <Form onSubmit={this.props.addItem}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="What would you like to do?"
              aria-label="To do to add"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button type="submit" variant="info">
                Add
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>

        <ListElement />
      </Container>
    );
  }
}
export default TodoList;
