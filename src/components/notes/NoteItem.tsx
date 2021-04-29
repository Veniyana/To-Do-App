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
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import EditIcon from "@material-ui/icons/Edit";
import NoteDialog from "./NoteDialog";
import { useDispatch } from "react-redux";
import { deleteNote } from "./../../redux/action";

type Props = {
  note: NoteType;
};

const Note = ({ note }: Props) => {
  const [open, setOpen] = useState(false);
  const [expand, setExpand] = useState(false);
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
        <ListItem className="item">
          <Typography variant="h4">{note.name}</Typography>
          <ListItemSecondaryAction>
            <IconButton onClick={() => setOpen(true)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => setExpand(!expand)}>
              {expand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            <IconButton aria-label="delete" onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        {expand && (
          <Typography variant="h6" className="description">
            {note.description}
          </Typography>
        )}
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
