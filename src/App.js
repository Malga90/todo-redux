import React from "react";
import TodoList from "./TodoList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      error: undefined
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

    if (!inputValue) {
      return "I'm sure, you want to do sth today!";
    } else if (this.state.todos.indexOf(inputValue) > -1) {
      return "Already on your to do list";
    } else {
      e.target.elements[0].value = "";
    }

    this.setState({
      todos: [...this.state.todos, inputValue]
    });
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem("todos");
      const todos = JSON.parse(json);

      if (todos) {
        this.setState(() => ({ todos }));
      }
    } catch (e) {
      // Do nth at all
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos.length !== this.state.todos.length);
    const json = JSON.stringify(this.state.todos);
    localStorage.setItem("todos", json);
    console.log("saving data!");
  }

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
