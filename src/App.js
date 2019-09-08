import React from "react";
import TodoList from "./TodoList";

class App extends React.Component {
  addItem = e => {
    e.preventDefault();

    console.log(e.target.elements.option.value());
  };
  render() {
    return (
      <div className="App">
        <TodoList addItem={this.addItem} />
      </div>
    );
  }
}
export default App;
