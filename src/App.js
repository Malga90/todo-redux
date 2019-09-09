import React from "react";
import TodoList from "./TodoList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }
  addItem = e => {
    e.preventDefault();
    const inputValue = e.target.elements[0].value.trim();
    console.log(inputValue);
    this.setState({
      todos: [...this.state.todos, inputValue]
    });
    console.log(this.state.todos);
  };

  render() {
    return (
      <div className="App">
        <TodoList addItem={this.addItem} todos={this.state.todos} />
      </div>
    );
  }
}
export default App;
