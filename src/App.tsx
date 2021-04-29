import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import AddToDo from "./components/toDo/AddToDo";
import ToDoList from "./components/toDo/ToDoList";
import AddNote from "./components/notes/AddNote"
import NoteList from "./components/notes/NoteList"
import Navigation from "./components/navigation/Navigation";

const App = () => {
  return (
    <div>
      <HashRouter>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <AddNote/>
            <NoteList />
          </Route>
          <Route path="/todos">
            <AddToDo />
            <ToDoList />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
