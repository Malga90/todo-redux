import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

class ListElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDone: false
    };
  }

  markItemCompleted = () => {
    this.setState({
      isDone: !this.state.isDone
    });
  };

  render() {
    return (
      <ListGroup.Item
        className="d-flex justify-content-between"
        variant={this.state.isDone ? "success" : ""}
      >
        {this.props.count}. {this.props.content}
        <ButtonGroup>
          <Button variant="success" onClick={this.markItemCompleted}>
            Done!
          </Button>
          <Button
            variant="danger"
            onClick={e => {
              this.props.deleteItem(this.props.content);
            }}
          >
            Remove
          </Button>
        </ButtonGroup>
      </ListGroup.Item>
    );
  }
}
export default ListElement;
