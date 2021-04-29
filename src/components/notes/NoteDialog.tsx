import React, { useState } from "react";
import { NoteType } from "./../../redux/types";
import {
  Button,
  Dialog,
  DialogTitle,
  TextareaAutosize,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import { useDispatch } from "react-redux";
import { changeDescription, deleteNote } from "./../../redux/action";

type Props = {
  open: boolean;
  onClose: () => void;
  noteInformation: NoteType;
};

const NoteDialog = ({ open, onClose, noteInformation }: Props) => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState(noteInformation.description);

  const handleClose = () => {
    const noteToChange = {
      name: noteInformation.name,
      description,
    };

    dispatch(changeDescription(noteToChange));
    onClose();
  };

  const handleDelete = () => {
    const noteToDelete = {
      name: noteInformation.name,
      description,
    };
    dispatch(deleteNote(noteToDelete));
    onClose();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="modalHeader">
          {noteInformation.name}
        </DialogTitle>
        <TextareaAutosize
          className="textArea"
          rowsMin={15}
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <div className="buttonContainer">
          <Button
            size="medium"
            color="primary"
            startIcon={<SaveIcon />}
            className="button"
            onClick={handleClose}
          >
            Save
          </Button>
          <Button
            size="medium"
            color="primary"
            startIcon={<DeleteIcon />}
            className="button"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </div>
      </Dialog>
    </div>
  );
};
export default NoteDialog;
