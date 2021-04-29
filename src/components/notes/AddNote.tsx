import React, { useState } from "react";
import { FormControl, TextField, Button } from "@material-ui/core";
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
        <FormControl>
          <TextField
            label="Enter note name"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          ></TextField>
          <Button onClick={addItemToList}>Add note</Button>
        </FormControl>
      </div>
    </div>
  );
};

export default AddNote;
