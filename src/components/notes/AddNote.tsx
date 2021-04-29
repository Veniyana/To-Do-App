import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addNote } from "./../../redux/action";

const AddNote = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const addItemToList = () => {
    if (name.length > 0) {
      const newItem = {
        name,
        description: "",
      };
      setName("");
      dispatch(addNote(newItem));
    }
  };

  return (
    <div className="header">
      <div className="addNote">
        <>
          <TextField
            label="Enter note name"
            value={name}
            size="small"
            variant="outlined"
            onChange={e => setName(e.target.value)}
          ></TextField>
          <Button variant="contained" color="primary" onClick={addItemToList}>
            Add note
          </Button>
        </>
      </div>
    </div>
  );
};

export default AddNote;
