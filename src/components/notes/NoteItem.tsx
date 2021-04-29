import React, { useState } from "react";
import { NoteType } from "../../redux/types";
import {
  Typography,
  List,
  ListItem,
  ListItemSecondaryAction,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import NoteDialog from "./NoteDialog";
import { useDispatch } from "react-redux";
import { deleteNote } from "./../../redux/action";

type Props = {
  note: NoteType;
};

const Note = ({ note }: Props) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = () => {
    const noteToDelete = {
      name: note.name,
      description: note.description,
    };
    dispatch(deleteNote(noteToDelete));
  };
  return (
    <div className="noteItem">
      <List>
        <ListItem button onClick={() => setOpen(true)}>
          <Typography variant="h4">{note.name}</Typography>
          <ListItemSecondaryAction onClick={() => handleDelete()}>
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
      <NoteDialog
        open={open}
        onClose={() => setOpen(false)}
        noteInformation={note}
      />
    </div>
  );
};

export default Note;
