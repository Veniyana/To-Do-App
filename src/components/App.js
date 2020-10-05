import React from "react";
import styles from "./../styles.module.css";
import ToDoItem from "./ToDoItem";
import Data from "./Data";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDos: Data,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      const tmpData = prevState.toDos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });

      return {
        toDos: tmpData,
      };
    });
  }

  render() {
    const arr = this.state.toDos.map((prod) => (
      <ToDoItem key={prod.id} item={prod} handleChange={this.handleChange} />
    ));
    return <div className={styles.container}>{arr}</div>;
  }
}

export default App;
