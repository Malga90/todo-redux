import React from "react";
import TodoList from "./TodoList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }
  deleteItem = itemToRemove => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => itemToRemove !== todo)
    }));
  };
  addItem = e => {
    e.preventDefault();
    const inputValue = e.target.elements[0].value.trim();

    this.setState({
      todos: [...this.state.todos, inputValue]
    });
  };

  render() {
    return (
      <div className="App">
        <TodoList
          deleteItem={this.deleteItem}
          addItem={this.addItem}
          todos={this.state.todos}
        />
      </div>
    );
  }
}
export default App;
