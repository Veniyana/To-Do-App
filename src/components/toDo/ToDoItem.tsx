import React, { useState } from "react";
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
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

type Props = {
  item: ToDoType;
};

const ToDoItem = ({ item }: Props) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    const changedItem = {
      name: item.name,
      completed: item.completed,
    };
    setChecked(!checked);
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
    <div className="toDoItem">
      <List>
        <ListItem className="item">
          <Typography variant="h4" className={item.completed ? "done" : ""}>
            {item.name}
          </Typography>
          <ListItemSecondaryAction>
            <IconButton onClick={handleClick}>
              {checked ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
            </IconButton>
            <IconButton aria-label="delete" onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </div>
  );
};

export default ToDoItem;
