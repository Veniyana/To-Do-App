import React from "react";
import { ToDoType } from "../../redux/types";
import { useDispatch } from "react-redux";
import { changeToDoCompleteness, removeToDo } from "../../redux/action";
import {
  Typography,
  List,
  ListItem,
  ListItemSecondaryAction,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

type Props = {
  item: ToDoType;
};

const ToDoItem = ({ item }: Props) => {
  const dispatch = useDispatch();

  const changeState = () => {
    const changedItem = {
      name: item.name,
      completed: item.completed,
    };
    dispatch(changeToDoCompleteness(changedItem));
  };

  const handleDelete = () => {
    const noteToDelete = {
      name: item.name,
      completed: item.completed,
    };
    dispatch(removeToDo(noteToDelete));
  };

  return (
    <div className="item">
      <List>
        <ListItem button onClick={() => changeState()}>
          <Typography variant={item.completed ? "h4" : "h3"} className={item.completed ? "done" : ""}>
            {item.name}
          </Typography>
          <ListItemSecondaryAction onClick={() => handleDelete()}>
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </div>
  );
};

export default ToDoItem;
